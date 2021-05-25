import React from 'react';
import { Row, Col, Space } from 'antd';
import cleanPic from './stockImage.png';

const landing = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <Covid/>   
            <One/>
            <Two/>
        </div>
    )
}

const Two = () => {
    return (
        <Row style={{padding: '5%'}}>
            <Col span={13}>
                 <h2 style={{fontWeight: 'bold'}}>Cleanups are back</h2>
            </Col>
            <Col span={13}>
                 <h2 style={{fontSize: 32}}>Social Distance while making a difference</h2>
            </Col> 
        </Row>
    )
}

const One = () => {
    return (
        <Row >
            <Col span={12}>
                <img src={cleanPic} style={{width: '100%', height: 350}} alt="cleaning"/>
            </Col>
            <Col span={12} style={{backgroundColor: "#DCFFE6", padding: '5%'}}>
                <Row align='middle' justify='center'>
                    <Col>
                        <h2 style={{ textAlign: 'start', fontSize: 40}}>
                            Spring Cleaning?
                        </h2>
                        <h1 style={{ textAlign: 'start', fontSize: 32}}>
                            Your community could use a hand
                        </h1>
                        <Register/>
                    </Col>
                </Row>
            </Col>    
        </Row> 
    )
}

const Covid = () => {
    return (
        <Row align='middle' justify='center' style={{backgroundColor: '#208970', height: 80}}>
            <h1 style={{color: 'white', textAlign: 'center'}}>
                See our new Covid-19 guidelines
            </h1>
         </Row>    
    )
}

const Register = () => {
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
              <h2 style={{ paddingTop: '5%' }}>Get Involved</h2>
              
            </Space>
          </Row>
        </div>
      </a>
    );
  };

export default landing


