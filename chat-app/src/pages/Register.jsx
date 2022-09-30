import React from 'react'
import "./style.css"

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Tindier Chat</span>
          <span className='title'>Register</span>
          <form className='form'>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input className='file1' type="file" id="file" />
            <label htmlFor='file'><img className='image1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQvlJ6C1weZEG5R3THn6kaxmRwjpsLPAJSvd-pirBKg&s' alt=''></img><span className='spanText'>Add an Avatar</span></label>
            <button>Sign Up</button>
          </form>
          <p>Do you already have an account? Login</p>

    </div>
    </div>
  )
}

export default Register