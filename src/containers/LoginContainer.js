import React, { useState, useReducer } from 'react';
import LoginComponent from '../components/LoginComponent'
import * as yup from 'yup';
import apiHelper from '../apis/apiHelper'

const initialState = {
  username: '', password: '',
  usernameErr: null, passwordErr: null,
}

const reducer = (state, action) =>{
  switch(action.type){
    case 'username':
      return {...state, username: action.value}
    case 'password':
      return {...state, password: action.value}
    case 'usernameErr':
      return {...state, usernameErr: action.value}
    case 'passwordErr':
      return {...state, passwordErr: action.value}    
  }
}

const LoginContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [password, setPassword] = useState('')
  // const [usernameErr, setUsernameErr] = useState(null)
  // const [passwordErr, setPasswordErr] = useState(null)  

  const { username, password} = state

  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required()
  });

  const validateData = () => {
    schema.validate({username, password}, { abortEarly: false })
    .then((data) => {
      apiHelper('post','https://api.taiga.io/api/v1/auth', {
        username, password, type: 'normal'
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        // setUsernameErr(err.response.data._error_message)
        console.log(err);
      });
    })
    .catch((err) => {
      err.inner.forEach((e) => {
        dispatch({ type: `${e.path}Err`, value: e.message });
        // if(e.path === 'username') setUsernameErr(e.message)
        // if(e.path === 'password') setPasswordErr(e.message)
        console.log(e.path, e.message)
      });
    });
  };
  
  return (
    <LoginComponent state={state} dispatch={dispatch} validateData={validateData} />
  )
}

export default LoginContainer;