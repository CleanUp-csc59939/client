import React, { useState } from 'react';
import '../../Shared/Header.css';
import { FormWeb, FormMobile } from './Form';
import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    setLoading(true);
    AuthService.register(values.email, values.password).then(
      () => {
        console.log('Success:', values);
        history.push('/login');
        window.location.reload();
      },
      () => {
        onFinishFailed('Please check form again');
        setLoading(false);
      },
    );
  };

  return (
    <div>
      <div className='web'>
        <div className='loginBody'>
          <div className='login-page'>
            <h1 style={{ textAlign: 'center', fontSize: '36px', color: 'whitesmoke', fontWeight: 'bold' }}>Register</h1>
            <div className='signUpForm'>
              <FormWeb onFinish={onFinish} setLoading={setLoading} loading={loading} onFinishFailed={onFinishFailed} />
            </div>
          </div>
        </div>
      </div>
      <div className='mobile'>
        <FormMobile onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </div>
    </div>
  );
};

export default SignUp;
