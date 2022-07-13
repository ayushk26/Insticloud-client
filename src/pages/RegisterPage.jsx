import React, { useState } from 'react'
import User from '../utils/user'

const RegisterPage = () => {

const [username,setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  
  const handlePassword1Change = (event) => {
    setPassword1(event.target.value)
  }
  const handlePassword2Change = (event) => {
    setPassword2(event.target.value)
  }

  const handleSubmit = async () => {
    if(password1 === password2){
        await User.createUser(username,password1)
    }
    else{
        alert("Passwords don't match!")
        setPassword1('')
        setPassword2('')
    }
  }

  return (
    <>
    <h1>Register</h1>
    <div>
          <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} placeholder="Username"/>
          <input type="password" name="password1" id="password1" value={password1} onChange={handlePassword1Change} placeholder="Password"/>
          <input type="password" name="password2" id="password2" value={password2} onChange={handlePassword2Change} placeholder="Re-enter password"/>
          <input type="submit" onClick={handleSubmit}/>
    </div>
    </>
  )
}

export default RegisterPage