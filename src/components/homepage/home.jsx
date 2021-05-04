import React from 'react';
import './home.css'
import { Row, Col, Space, Image, Button} from 'antd';
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from "react-icons/ai";
// import { useState, useRef } from 'react';

const EventData = {
  "userID": 1,
  "name": "Bi-Weekly Clean Up at Prospect Park",
  "desc": "Lorem ipsum Messenger bag chartreuse craft beer, affogato tacos fashion axe palo santo kinfolk meditation austin skateboard green juice. Sriracha mustache ",
  "locationName": "Prospect Park",
  "location": "123 Smith Street, Brooklyn, NY 10434",
  "img": "https://patersontimes.com/wp-content/uploads/2015/04/paterson-students-cleaning-great-falls.jpg",
  "date": "Tuesday, May 4th, 2021",
  "time": "5:30-8:30pm",
  "type": "Park",
  "amount": "8",
  "attending": [{"name": "John Kim", "userID": 2}, {"name": "Riley Adams", "userID": 3}, {"name": "Julio Carlos", "userID": 4}]
}

export default function Home({currentUser}) {

  return (
    <div>
      <Banner event={EventData} currentUser={currentUser}/>

    </div>
  )
}

const Banner = (props) => {
  const {event, currentUser} = props
  return (
    <div style={{backgroundColor: '#208970', paddingTop: '5%', paddingBottom: '5%'}}>
      <Row>
        <Col span={12} offset={4}>
          <h1 style={{color: 'white'}}>Hi {`${currentUser.email}`}, get ready for your next cleanup!</h1>
          <div style={{height: 1, backgroundColor: '#3EFFD1', width: '70%'}}/>
            <br/>
            <h1 style={{color: 'white', fontSize: 24}}>{event.name}</h1>
            <Row>
              <Space>
                <AiOutlineCalendar color='#3EFFD1' size={24}/>
                <Row gutter={24}>
                  <Col><h4 style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>{event.date}</h4></Col>
                  <Col><h4 style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>{event.time}</h4></Col>
                </Row>
              </Space>
            </Row>
            <Space>
                <AiOutlineEnvironment color='#3EFFD1' size={24}/>
                <Row gutter={24}>
                <Col> <h4 style={{color: 'white'}}>{event.locationName}</h4> </Col>
                <Col> <h4 style={{color: 'white'}}>{event.location}</h4> </Col>
                </Row>
            </Space>
            <Row>    
            <AiOutlineUsergroupAdd color='#3EFFD1' size={24}/>
            <h4 style={{color: 'white'}}>{`${event.amount} people attending`}</h4>
            </Row>
        </Col>
        <Col span={6} style={{paddingTop:'3%' }}>
          <Image src={event.img} style={{height: '80%', width: '100%'}}/>
        </Col>
        <Col  span={12} offset={4} >
          <Button shape="round" style={{height: 40, width: 200, backgroundColor: '#3EFFD1', borderRadius: 30, borderColor: '#3EFFD1'}}>
            <Col>
              <Space>
                More details
                <AiOutlineArrowRight size={20}/>
              </Space>
            </Col>
          </Button>
        </Col>
        
      </Row>
    </div>
  )
}



