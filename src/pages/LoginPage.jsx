import React, { useState } from 'react'
import User from '../utils/user'

const LoginPage = () => {

  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  
  const handleSubmit = () => {
    User.loginUser(username,password)
  }

  return (
    <>
      <h1>Login</h1>
      <div>
          <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} placeholder="Username"/>
          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
          <input type="submit" onClick={handleSubmit}/>
        
      </div>
    </>
  )
}

export default LoginPage