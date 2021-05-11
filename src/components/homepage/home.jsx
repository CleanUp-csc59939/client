import { React, useState } from 'react';
// import Loading from './my-loading-component';
import './home.css';
import { Row, Col, Space, Image, Button } from 'antd';

import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
import eventsService from '../../services/events.service';

// const EventData = {
//   userID: 1,
//   name: 'Bi-Weekly Clean Up at Prospect Park',
//   desc:
//     'Lorem ipsum Messenger bag chartreuse craft beer, affogato tacos fashion axe palo santo kinfolk meditation austin skateboard green juice. Sriracha mustache ',
//   locationName: 'Prospect Park',
//   location: '123 Smith Street, Brooklyn, NY 10434',
//   img: 'https://patersontimes.com/wp-content/uploads/2015/04/paterson-students-cleaning-great-falls.jpg',
//   date: 'Tuesday, May 4th, 2021',
//   time: '5:30-8:30pm',
//   type: 'Park',
//   amount: '8',
//   attending: [
//     { name: 'John Kim', userID: 2 },
//     { name: 'Riley Adams', userID: 3 },
//     { name: 'Julio Carlos', userID: 4 },
//   ],
//  };

const getEvents = async () => {
  const a = await eventsService.getEvents();
  return a;
};

export default function Home(props) {
  const [events, setEvents] = useState('');

  if (events === '') {
    getEvents().then((response) => {
      setEvents(response.data);
    }); // the [1] is showing only that single event
  }

  const { currentUser } = props;

  if (currentUser && currentUser.email && events !== '') {
    return (
      <>
        {Object.keys(events).map((index) => {
          return (
            <div
              key={events[index].id}
              style={{
                backgroundColor: '#208970',
                paddingTop: '80px',
                paddingBottom: '100px',
                marginBottom: '50px',
                marginTop: '50px',
              }}
            >
              <Row>
                <Col span={12} offset={4}>
                  <h1 style={{ color: 'white', fontSize: 24 }}>{events[index].name}</h1>
                  <div style={{ height: 1, backgroundColor: '#3EFFD1', width: '70%' }} />
                  <br />
                  <h1 style={{ color: 'white', fontSize: 18 }}>{events[index].desc}</h1>
                  <Row>
                    <Space>
                      <AiOutlineCalendar color='#3EFFD1' size={24} />
                      <Row gutter={24}>
                        <Col>
                          <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{events[index].date}</h4>
                        </Col>
                        <Col>
                          <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{events[index].time}</h4>
                        </Col>
                      </Row>
                    </Space>
                  </Row>
                  <Space>
                    <AiOutlineEnvironment color='#3EFFD1' size={24} />
                    <Row gutter={24}>
                      <Col>
                        {' '}
                        <h4 style={{ color: 'white' }}>Location:</h4>{' '}
                      </Col>
                      <Col>
                        {' '}
                        <h4 style={{ color: 'white' }}>{events[index].location}</h4>{' '}
                      </Col>
                    </Row>
                  </Space>
                  <Row>
                    <AiOutlineUsergroupAdd color='#3EFFD1' size={24} />
                    <h4 style={{ color: 'white' }}>{`${events[index].amount} people attending`}</h4>
                  </Row>
                </Col>
                <Col span={6} style={{ paddingTop: '3%' }}>
                  <Image src={events[index].img} style={{ height: '100%', width: '100%' }} />
                </Col>
                <Col span={12} offset={4}>
                  <Button
                    shape='round'
                    style={{
                      height: 40,
                      width: 200,
                      backgroundColor: '#3EFFD1',
                      borderRadius: 30,
                      borderColor: '#3EFFD1',
                    }}
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
        })}
      </>
    );
  }
  return (
    <div id='loading'>
      <img id='loading-image' src='loading/loading-gif.gif' alt='Loading...' />
    </div>
  );
}
