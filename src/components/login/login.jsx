import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className='loginBody'>
    <div className='login-page'>
      <div className='form'>
        <form className='register-form'>
          <input type='text' placeholder='name' />
          <input type='password' placeholder='password' />
          <input type='text' placeholder='email address' />
          <button type='submit'>create</button>
          <p className='message'>
            Already registered? <a href='/'>Sign In</a>
          </p>
        </form>
        <form className='login-form'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button type='submit'>login</button>
          <p className='message'>
            Not registered? <a href='/signup'>Create an account</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
