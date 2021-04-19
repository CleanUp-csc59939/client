import React from 'react';
import { Row, Col, PageHeader, Space } from 'antd';
import '../CSS/Header.css';

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
    <div className='site-page-header'>
      <Row className='web'>
        <Col span={4}>
          <h2>Clean Up</h2>
        </Col>
        <Col span={6} offset={14}>
          <Row>
            <Col className='subtitle'>
              <h2>Log In</h2>
            </Col>
            <Col className='subtitle'>
              <h2>Sign Up</h2>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row sm={4} className='mobile'>
        <PageHeader className='site-page-header' title='Clean Up' subTitle='Logged Out, Small Screen' />
      </Row>
    </div>
  );
};
export default Header;
