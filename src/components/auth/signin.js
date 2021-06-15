import React, {useState, useContext, useReducer} from "react";
import {If, Then, Else} from 'react-if';
import {LoginContext} from './loginContext.js';
import { Button, ButtonGroup } from 'react-bootstrap';
function Login() {

  const userContext = useContext(LoginContext);

  const [signin, setSignin] = useState(true)

  const handleChange = (e) => {
    userContext.setUser( {...userContext.user, [e.target.name]: e.target.value})
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // send the user object to: context
    userContext.login(userContext.user);
  }

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    userContext.signup(userContext.user);
  }

  const form = signin ?
    (
      <form onSubmit={handleSubmitLogin}>
        <input placeholder="username" name="username" onChange={handleChange} />
        <input name="password" type="password" onChange={handleChange} />
        <button>Signin</button>
        <button onClick={() => setSignin(!signin)}>Create New Account</button>
      </form>
    ) :
    (
      <form onSubmit={handleSubmitSignup}>
        <input placeholder="create username" name="username" onChange={handleChange} />
        <input placeholder="create password" name="password" type="password" onChange={handleChange} />
        <ButtonGroup className="radio">
          <Button variant="secondary" type="radio" name="role" value="user" onClick={handleChange}>User</Button>
          <Button variant="secondary" type="radio" name="role" value="editor" checked={true} onClick={handleChange}>Editor</Button>
          <Button variant="secondary" type="radio" name="role" value="admin" onClick={handleChange}>Admin</Button>
        </ButtonGroup>
        <button>Create New Account</button>
        <button onClick={() => setSignin(!signin)}>Switch to Login Form</button>
      </form>
    )

  return (
    <If condition={userContext.loggedIn}>
      <Then>
        <button onClick={userContext.logout}>Sign Out</button>
      </Then>
      <Else>
        {form}
      </Else>
    </If>
  )

}

export default Login;
