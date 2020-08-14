import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent'
import * as yup from 'yup';
import apiHelper from '../apis/apiHelper'

const LoginContainer = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameErr, setUsernameErr] = useState(null)
  const [passwordErr, setPasswordErr] = useState(null)


  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required()
  });

  const validateData = () => {
    schema.validate({username, password}, { abortEarly: false })
    .then((data) => {
      apiHelper('post','https://api.taiga.io/api/v1/auth',{username, password, 'type':'normal'})
    })
    .catch((err) => {
      err.inner.forEach((ele) => {
        // dispatch({ type: `${ele.path}Error`, value: ele.message });
        if(ele.path === 'username') setUsernameErr(setUsernameErr)
        if(ele.path === 'password') setUsernameErr(setPasswordErr)
        console.log(ele.path, ele.message)
      });
    });
  };
  
  return (
    <LoginComponent username={username}
      password={password} setUsername={setUsername} setPassword={setPassword}
      validateData={validateData} usernameErr={usernameErr} passwordErr={passwordErr}/>
  )

}


export default LoginContainer;