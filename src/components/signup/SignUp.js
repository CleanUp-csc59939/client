import React from 'react';
import '../../Shared/Header.css';
import { FormWeb, FormMobile } from './Form';
import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    AuthService.register(values.email, values.password).then(
      () => {
        console.log('Success:', values);
        history.push('/login');
        window.location.reload();
      },
      () => {
        onFinishFailed('not a valid email');
      },
    );
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
