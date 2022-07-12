import React, { useState } from 'react'

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
    console.log(username,password)
  }

  return (
    <>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit} >
          <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} placeholder="Username"/>
          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default LoginPage