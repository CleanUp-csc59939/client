import { React } from 'react';
// import Loading from './my-loading-component';
import './home.less';
import { Row, Col, Space, Image, Button, Carousel } from 'antd';
import Divider from '../../Shared/Components'


import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
// import AuthService from '../../services/auth.service';

const EventData = {
  userID: 1,
  name: 'Bi-Weekly Clean Up at Prospect Park',
  desc:
    'Lorem ipsum Messenger bag chartreuse craft beer, affogato tacos fashion axe palo santo kinfolk meditation austin skateboard green juice. Sriracha mustache ',
  locationName: 'Prospect Park',
  location: '123 Smith Street, Brooklyn, NY 10434',
  img: 'https://patersontimes.com/wp-content/uploads/2015/04/paterson-students-cleaning-great-falls.jpg',
  date: 'Tuesday, May 4th, 2021',
  time: '5:30-8:30pm',
  type: 'Park',
  amount: '8',
  attending: [
    { name: 'John Kim', userID: 2 },
    { name: 'Riley Adams', userID: 3 },
    { name: 'Julio Carlos', userID: 4 },
  ],
};

const MultiEvents = [
  {
    "id": 1,
    "userID": 1,
    "name": '1st event',
    "desc": null,
    "location": null,
    "img": null,
    "date": null,
    "type": null,
    "amount": 2,
    "createdAt": "2021-05-08T19:26:06.300Z",
    "updatedAt": "2021-05-08T23:49:14.162Z"
  },
  {
    "id": 2,
    "userID": 1,
    "name": '2nd event',
    "desc": null,
    "location": null,
    "img": null,
    "date": null,
    "type": null,
    "amount": 2,
    "createdAt": "2021-05-08T19:26:06.300Z",
    "updatedAt": "2021-05-08T23:49:14.162Z"
  },
  {
    "id": 3,
    "userID": 1,
    "name": '3rd event',
    "desc": null,
    "location": null,
    "img": null,
    "date": null,
    "type": null,
    "amount": 2,
    "createdAt": "2021-05-08T19:26:06.300Z",
    "updatedAt": "2021-05-08T23:49:14.162Z"
  },
  {
    "id": 4,
    "userID": 1,
    "name": '4th event',
    "desc": null,
    "location": null,
    "img": null,
    "date": null,
    "type": null,
    "amount": 2,
    "createdAt": "2021-05-08T19:26:06.300Z",
    "updatedAt": "2021-05-08T23:49:14.162Z"
  }
]

export default function Home(props) {
  const { currentUser } = props;
  return (
    <div>
      <Banner event={EventData} currentUser={currentUser} />
      <div style={{fontWeight: 'bold', fontFamily: 'Nunito', fontSize: 24, paddingLeft: '5%', paddingTop: '2%'}}>Your Upcoming Events</div>
      <Upcoming events={MultiEvents} event={EventData}/>
      <div style={{fontWeight: 'bold', fontFamily: 'Nunito', fontSize: 24, paddingLeft: '5%', paddingTop: '2%'}}>Browse nearby events</div>
      <Upcoming events={MultiEvents} event={EventData}/>
    </div>
  );
}
function onChange(a, b, c) {
  console.log(a, b, c);
}

const Upcoming = (props) => {
  const {events, event} = props
  return (
    <Carousel afterChange={onChange} style={{paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f9f9f9'}}>
      {events.map((e) => {
        return (
          <Row>
            <img style={{height: '10%', width: '20%'}} src={event.img} alt="event"/>
            <Col span={6}>{e.name} placeholder</Col>
          </Row>

        )
      })}

    
  </Carousel>
  )
}

const Banner = (props) => {
  const { event } = props;
  const { currentUser } = props;
  if (currentUser && currentUser.email) {
    return (
      <div className='background'>
        <Row>
          <Col span={12} offset={4}>
            <h1 className='banner-text'>Hi {currentUser.email}, get ready for your next cleanup!</h1>
            <Divider height={1} width='70%' color='#3EFFD1'/>
            <br />
            <div className='banner-subheader banner-text'>{event.name}</div>
            <Row>
              <Space>
                <AiOutlineCalendar color='#3EFFD1' size={24} />
                <Row gutter={24}>
                  <Col>
                    <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{event.date}</h4>
                  </Col>
                  <Col>
                    <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{event.time}</h4>
                  </Col>
                </Row>
              </Space>
            </Row>
            <Space>
              <AiOutlineEnvironment color='#3EFFD1' size={24} />
              <Row gutter={24}>
                <Col>
                  <text className='banner-text'>{event.locationName}</text>
                </Col>
                <Col>
                  <text className='banner-text'>{event.location}</text>
                </Col>
              </Row>
            </Space>
            <Row>
              <AiOutlineUsergroupAdd color='#3EFFD1' size={24} />
              <text className='banner-text'>{`${event.amount} people attending`}</text>
            </Row>
          </Col>
          <Col span={6}>
            <Image className='image' src={event.img} />
          </Col>
          <Col span={12} offset={4}>
            <Button
              shape='round'
              style={{ height: 40, width: 200, backgroundColor: '#3EFFD1', borderRadius: 30, borderColor: '#3EFFD1' }}
            >
              <Col>
                <Space>
                  More details
                  <AiOutlineArrowRight size={20} />
                </Space>
              </Col>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
  return (
  <div id="loading">
  <img id="loading-image" src="loading/loading-gif.gif" alt="Loading..." />
  </div>
  );
};
