import React, {useState, useContext, useReducer} from "react";

import {If, Then, Else} from 'react-if';

import {LoginContext} from './loginContext.js';

function Login() {

  // const [user, setUser] = useState({});
  const userContext = useContext(LoginContext);

  // console.log(userContext);

  const handleChange = (e) => {
    userContext.setUser( {...userContext.user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the user object to: context
    userContext.login(userContext.user);
  }


  return (
    <If condition={userContext.isLoggedIn}>
      <Then>
        <button onClick={userContext.logout}>Sign Out</button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input placeholder="username" name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange} />
          <button>Signin</button>
        </form>
      </Else>
    </If>
  )

}

export default Login;
