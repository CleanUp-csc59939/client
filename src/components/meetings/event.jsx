import { React, useState } from 'react';
// import Loading from './my-loading-component';
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

const getEvent = async (userID) => {
  const a = await eventsService.getSingleEvent(userID);
  return a;
};

export default function SingleEvent(props) {
  const [event, setEvent] = useState('');
    
  if (event === '') {
    getEvent(props.match.params.id).then((response) => {
      setEvent(response.data);
    }); // the [1] is showing only that single event
  }

  // const { currentUser } = props;
if (event==null) 
{
  return <h1 style={{ color: 'Green', fontSize: 72 }}>Oops Event does not exist...</h1>
}

  if (event !== '') {
    return (
      <div>
        <a href='/myMeetUps/create' alt='' type='submit'>
          <Button
            shape='round'
            style={{ height: 60, width: 240, backgroundColor: '#3EFFD1', borderRadius: 60, borderColor: '#3EFFD1' }}
          >
            <Col>
              <Space>
                Edit This Event
                <AiOutlineArrowRight size={20} />
              </Space>
            </Col>
          </Button>
        </a>
        
                <div
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
                      <div style={{ height: 1, backgroundColor: '#3EFFD1', width: '70%' }} />
                      <br />
                      <h1 style={{ color: 'white', fontSize: 24 }}>{event.name}</h1>
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
                            {' '}
                            <h4 style={{ color: 'white' }}>Location:</h4>{' '}
                          </Col>
                          <Col>
                            {' '}
                            <h4 style={{ color: 'white' }}>{event.location}</h4>{' '}
                          </Col>
                        </Row>
                      </Space>
                      <Row>
                        <AiOutlineUsergroupAdd color='#3EFFD1' size={24} />
                        <h4 style={{ color: 'white' }}>{`${event.amount} people attending`}</h4>
                      </Row>
                    </Col>
                    <Col span={6} style={{ paddingTop: '3%' }}>
                      <Image src={event.img} style={{ height: '100%', width: '100%' }} />
                    </Col>
                    
                  </Row>
                </div>
              );
            
      </div>
    );
  }
  return (
    <div id='loading'>
      <img id='loading-image' src='loading/loading-gif.gif' alt='Loading...' />
    </div>
  );
}
