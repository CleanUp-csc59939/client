import React from 'react';
import { Row, Col, PageHeader, Button, Space } from 'antd';
import './Header.css';

const Header = (props) => {
  // logic to check if logged in goes here to switch between 2 different headers
  const { loggedIn } = props;
  if (loggedIn) {
    return (
      <div className='site-page-header'>
        <Row className='web'>
          <Col span={4}>
            <h2>Clean Up</h2>
          </Col>
          <Col span={6} offset={14}>
            <Row>
              <Space>
                <Col>
                  <h2>Home</h2>
                </Col>
                <Col>
                  <h2>Profile</h2>
                </Col>
                <Col>
                  <h2>Settings</h2>
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
          <h2>CleanUp</h2>
        </Button>,
      ]}
      subTitle="Let's clean up our home"
      extra={[
        <Button href='/login' key='3'>
          Login
        </Button>,
        <Button href='/signup' key='2'>
          SignUp
        </Button>,
      ]}
    ></PageHeader>
  );
};
export default Header;
