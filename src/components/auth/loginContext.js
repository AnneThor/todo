import React, { useState, useEffect } from 'react';

import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import superagent from 'superagent';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  const base = ""

  // A toggle that says if you are logged in or not
  const [loggedIn, setLoggedIn] = useState(false);

  // This is going to be the user record from the API
  const [user, setUser] = useState({});
  const [capabilities, setCapabilities]  = useState([]);

  const validateToken = (token) => {
    try {
      const tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET)
      setLoggedIn(true);
      setUser(tokenUser);
      cookie.save('auth', token);
    } catch(e) {
      setUser({});
      setLoggedIn(false);
      console.warn('Token Validation Error', e)
    }
  }

  const logout = () => {
   setUser({});
   setLoggedIn(false);
   cookie.remove('auth');
  }

  const can = (permission) => {
    return capabilities && capabilities.includes(permission);
  }

  const login = async (input) => {
    const API = `https://at-taskmanager.herokuapp.com/signin`;
    try {
      const response = await superagent.post(API)
        .auth( input.username, input.password );

        const {token} = response.body;
        setLoggedIn(true);
        setCapabilities(response.body.user.capabilities)
        validateToken(token);

    } catch(e) {
      console.warn('Login Attempt Failed')
    }
  }

  const signup = async(input) => {
    console.log("INPUT", input)
    const API = `https://at-taskmanager.herokuapp.com/signup`;
    try {
      const response = await superagent.post(API)
      .send(input);
      const { token } = response.body;
      setLoggedIn(true);
      setCapabilities(response.body.user.capabilities);
      validateToken(token)
    } catch(e) {
      console.warn('Sign up failure')
    }
  }

  useEffect( () => {
    const token = cookie.load('auth') || null;
    validateToken(token);
  }, [])

  const sharedThings = {
    login,
    logout,
    can,
    user, setUser,
    loggedIn, capabilities, signup
  };

  return (
    <LoginContext.Provider value={sharedThings}>
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
