import { useState, useRef } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import AuthService from '../../services/auth.service';

const required = (value) => {
  if (!value) {
    return (
      <div className='alert' role='alert'>
        This field is required!
      </div>
    );
  }
  return null;
};

const checkemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert' role='alert'>
        This is not a valid email.
      </div>
    );
  }
  return null;
};

/**
 *
 * return Login page*
 * @component
 * @return  {Component}            Return Login page where user can input their credentials
 */
const Login = () => {
  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  /**
   * detects changes in the email field changes in the email field
   * @param {object} e Component props
   * @param {string} e.target.value Sets the email field as current user's email input
   */
  const onChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  /**
   * detects changes in the password field changes in the password field
   * @param {object} e Component props
   * @param {string} e.target.value Sets the password field as current user's password input
   */
  const onChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  /**
   * function called after user clicks login
   * @param {object} e Component props
   * @param {string} e.preventDefault
   * @property {form} form validate the form
   * @property {method} AuthService sends email and password input to the authenication service which communicates with the back end
   * @returns {HTMLBodyElement} Returns the HTML code of the Login Form
   */
  const handleLogin = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    AuthService.login(email, password).then(
      () => {
        history.push('/home');
        window.location.reload();
      },
      () => {
        const resMessage = 'invalid Credentials';

        setLoading(false);
        setMessage(resMessage);
      },
    );
  };

  return (
    <div className='loginBody'>
      <div className='login-page'>
        <div className='form'>
          <Form className='login-form' onSubmit={handleLogin} ref={form}>
            <Input
              validations={[required, checkemail]}
              type='text'
              placeholder='email'
              name='email'
              value={email}
              onChange={onChangeEmail}
            />

            <Input
              type='password'
              placeholder='password'
              name='password'
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />

            <button disabled={loading} type='submit'>
              {loading && <span className='spinner-border spinner-border-sm'></span>}
              <span>Login</span>
            </button>

            {message && (
              <div className='alert' role='alert'>
                {message}
              </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            <p className='message'>
              Not registered? <a href='/signup'>Create an account</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
