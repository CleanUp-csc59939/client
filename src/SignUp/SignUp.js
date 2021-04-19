import React from 'react';
import '../CSS/Header.css';
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
