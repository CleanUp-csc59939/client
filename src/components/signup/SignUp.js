import React, { useState } from 'react';
import '../../Shared/Header.css';
import { FormWeb, FormMobile } from './Form';
import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';
import './SignUp.css';

/**
 *
 * return Sign Up page*
 * @component
 * @return  {Component}            Return Home page showing the user's events
 */

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  /**
   * Calls the create user register service with user inputs
   * @method
   */
  const onFinish = (values) => {
    setLoading(true);
    AuthService.register(values.email, values.password).then(
      () => {
        history.push('/login');
        window.location.reload();
      },
      () => {
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
              <FormWeb onFinish={onFinish} setLoading={setLoading} loading={loading} />
            </div>
          </div>
        </div>
      </div>
      <div className='mobile'>
        <FormMobile onFinish={onFinish} />
      </div>
    </div>
  );
};

export default SignUp;
