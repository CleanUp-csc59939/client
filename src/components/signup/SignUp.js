import React from 'react';
import '../../Shared/Header.css';
import { FormWeb, FormMobile } from './Form';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    fetch('http://localhost:8080/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Register</h1>
      <div className='web'>
        <FormWeb onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </div>
      <div className='mobile'>
        <FormMobile onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </div>
    </div>
  );
};

export default SignUp;
