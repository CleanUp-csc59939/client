import React from 'react';
import { PageHeader, Button, Row, Col, Space } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import AuthService from '../services/auth.service';

import './Header.css';
// import AuthService from '../services/auth.service';

const Header = ({ currentUser /* pageTitle  */ }) => {
  // logic to check if logged in goes here to switch between 2 different headers
  const logOut = () => {
    console.log('log out');
    AuthService.logout();
  };

  const CreateEvent = () => {
    return (
      <a href='/myMeetUps/create' alt='' type='submit'>
        <div
          style={{
            height: 50,
            width: 200,
            backgroundColor: '#AEFFCF',
            borderRadius: 60,
            borderColor: '#AEFFCF',
          }}
        >
          <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Space size='small'>
              <h2 style={{ paddingTop: '5%' }}>Create Event</h2>
              <AiOutlinePlus size={20} style={{ paddingBottom: '2%' }} />
            </Space>
          </Row>
        </div>
      </a>
    );
  };
  if (currentUser) {
    return (
      <div className='site-page-header'>
        <img className='headerImg' src='/logo.png' alt='' />
        <Row className='web' style={{ padding: '2%' }}>
          <Col span={3} style={{ paddingTop: '10px' }}>
            <Button className='homeButton' type='link' href='/home'>
              <h2 style={{ fontWeight: 'bold', color: '#4F4F4F' }}>CleanUp</h2>
            </Button>
          </Col>
          <Col span={12} offset={9}>
            <Row>
              <Space size='small'>
                <CreateEvent />
                <Col>
                  <Button type='link' href='/home'>
                    <h2>Home</h2>
                  </Button>
                </Col>
                <Col>
                  <Button type='link' href='/myMeetups'>
                    <h2>My Meet Ups</h2>
                  </Button>
                </Col>
                <Col>
                  <Button type='link' href='/profile' onClick={logOut}>
                    <h2>Profile</h2>
                  </Button>
                </Col>
                <Col>
                  <Button type='link' href='/login' onClick={logOut}>
                    <h2>Logout</h2>
                  </Button>
                </Col>
              </Space>
            </Row>
          </Col>
        </Row>
        <Row sm={4} className='mobile'>
          <Col span={8} offset={8}>
            <h2>Clean Up</h2>
          </Col>
        </Row>
      </div>
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
