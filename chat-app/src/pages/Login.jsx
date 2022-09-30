import React from 'react'
import "./style.css"

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Tindier Chat</span>
          <span className='title'>Login</span>
          <form className='form'>
            
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Sign In</button>
          </form>
          <p>Don't have an account? Register</p>

    </div>
    </div>
  )
}

export default Login