import React, {useContext} from 'react';
import {LoginContext} from './loginContext.js';
import {When} from 'react-if';

function Auth(props) {

  const userContext = useContext(LoginContext)
  const canDoThing = props.capability ? userContext.can(props.capability) : true ;
  const okToRender = userContext.loggedIn && canDoThing;

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  )

}

export default Auth;
