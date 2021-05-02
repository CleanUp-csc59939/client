import React from 'react';
import { PageHeader, Button } from 'antd';
import './Header.css';
import AuthService from '../services/auth.service';

const Header = ({ currentUser, pageTitle }) => {
  // logic to check if logged in goes here to switch between 2 different headers
  const logOut = () => {
    AuthService.logout();
  };

  if (currentUser) {
    return (
      <PageHeader
        className='site-page-header'
        ghost={false}
        title={pageTitle}
        extra={[
          <Button className='homeButton' href='/login' onClick={logOut} key='3'>
            <h4 className='headerOther'>Logout</h4>
          </Button>,
        ]}
      ></PageHeader>
    );
  }
  return (
    <PageHeader
      className='site-page-header'
      ghost={false}
      title={[
        <Button className='homeButton' href='/home' key='1'>
          <h2 className='headerTitle'>CleanUp</h2>
        </Button>,
      ]}
      subTitle={[<img className='headerImg' src='./logo.png' alt='' />, "Let's Clean Up Our Home"]}
      extra={[
        <Button className='homeButton' href='/login' key='3'>
          <h4 className='headerOther'>Login</h4>
        </Button>,
        <Button className='homeButton' href='/signup' key='2'>
          <h4 className='headerOther'>SignUp</h4>
        </Button>,
      ]}
    ></PageHeader>
  );
};
export default Header;
