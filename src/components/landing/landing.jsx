import React from 'react';
import { Row, Col, Space, Input } from 'antd';
import cleanPic from './stockImage.png';
import phoneMockup from './phonemockup.png';
import phoneMockup2 from './events2.png';

/**
 * @component
 * Landing page component. Renders all sections of the landing page
 * @returns {Component}
 * 
 */
const Landing = () => {
  return (
    <div style={{ backgroundColor: '#F3F2F2' }}>
      <Covid />
      <One />
      <Two />
      <Three />
    </div>
  );
};

/**
 * @method
 * 3rd component. Renders mockup images and static signup button
 * @returns {Component}
 * 
 */
const Three = () => {
  return (
    <Row style={{ padding: '5%', margin: '2%', backgroundColor: 'white', marginTop: '2%' }}>
      <Col span={10}>
        <h2 style={{ fontWeight: 'bold' }}>iOS app coming soon!</h2>
        <h2 style={{ fontSize: 32 }}>Subscribe for updates and be the first to know</h2>
        <Input style={{ width: 300, marginBottom: '5%' }} placeholder='Enter your email' />
        <Register text='Submit' />
      </Col>
      <Col span={12} push={2}>
        <Space>
          <img src={phoneMockup} style={{ height: 400, width: 210 }} alt='phone' />
          <img src={phoneMockup2} style={{ height: 400, width: 210 }} alt='phone' />
        </Space>
      </Col>
    </Row>
  );
};


/**
 * @method
 * 2nd component. Renders static sample event images
 * @returns {Component}
 * 
 */
const Two = () => {
  return (
    <Row style={{ padding: '2%', margin: '2%', backgroundColor: 'white' }}>
      <Row>
        <Col span={13}>
          <h2 style={{ fontWeight: 'bold' }}>Cleanups are back</h2>
        </Col>
        <Col span={24}>
          <h2 style={{ fontSize: 32 }}>Social distance while making a difference</h2>
        </Col>
      </Row>
      <Row>
        <Space size='large'>
          <Col span={8}>
            <img src={cleanPic} style={{ width: '300%', height: 200 }} alt='cleaning' />
            <p style={{ fontSize: 20 }}>Beaches</p>
          </Col>
          <Col span={8}>
            <img src={cleanPic} style={{ width: '300%', height: 200 }} alt='cleaning' />
            <p style={{ fontSize: 20 }}>Parks</p>
          </Col>
          <Col span={8}>
            <img src={cleanPic} style={{ width: '300%', height: 200 }} alt='cleaning' />
            <p style={{ fontSize: 20 }}>Streets</p>
          </Col>
        </Space>
      </Row>
    </Row>
  );
};

/**
 * @method
 * 1st component. Renders static sample event images + description
 * @returns {Component}
 * 
 */
const One = () => {
  return (
    <Row style={{ margin: '2%', backgroundColor: 'white', padding: '2%' }}>
      <Col span={12}>
        <img src={cleanPic} style={{ width: '100%', height: 350 }} alt='cleaning' />
      </Col>
      <Col span={12} style={{ backgroundColor: '#DCFFE6', padding: '5%' }}>
        <Row align='middle' justify='center'>
          <Col>
            <h2 style={{ textAlign: 'start', fontSize: 40 }}>Spring Cleaning?</h2>
            <h1 style={{ textAlign: 'start', fontSize: 32 }}>Your community could use a hand</h1>
            <Register text='Get Involved' />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

/**
 * @method
 * Covid Banner
 * @returns {Component}
 * 
 */
const Covid = () => {
  return (
    <Row align='middle' justify='center' style={{ backgroundColor: '#208970', height: 80 }}>
      <h1 style={{ color: 'white', textAlign: 'center', textDecorationLine: 'underline' }}>
        See our new Covid-19 guidelines
      </h1>
    </Row>
  );
};

/**
 * @method
 * Static button
 * @returns {Component}
 * 
 */
const Register = (props) => {
  const { text } = props;
  return (
    <a href='/myMeetUps/create' alt='' type='submit'>
      <div
        style={{
          height: 50,
          width: 300,
          backgroundColor: '#AEFFCF',
          borderRadius: 60,
          borderColor: '#AEFFCF',
        }}
      >
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Space size='small'>
            <h2 style={{ paddingTop: '5%' }}>{text}</h2>
          </Space>
        </Row>
      </div>
    </a>
  );
};

export default Landing;
