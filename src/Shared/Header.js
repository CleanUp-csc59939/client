import React from 'react';
import { PageHeader, Button } from 'antd';
import './Header.css';

const Header = ({ loggedIn, pageTitle }) => {
  // logic to check if logged in goes here to switch between 2 different headers

  if (loggedIn) {
    return (
      <PageHeader
        className='site-page-header'
        ghost={false}
        title={pageTitle}
        extra={[
          <Button className='homeButton' href='/logout' key='3'>
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
