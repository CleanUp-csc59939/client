import { React, useState } from 'react';
import { Row, Col, Space, Image, Button } from 'antd';

import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
import eventsService from '../../services/events.service';

const getEvents = async () => {
  const a = await eventsService.getEvents();
  return a;
};

export default function MyMeetups(props) {
  const [events, setEvents] = useState('');

  if (events === '') {
    getEvents().then((response) => {
      setEvents(response.data);
    }); // the [1] is showing only that single event
  }

  const { currentUser } = props;

  if (currentUser && currentUser.email && events !== '') {
    let eventUrl = ``;
    return (
      <div>
        <>
          {Object.keys(events)
            .map((index) => {
              eventUrl = `/event/${events[index].id}`;
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
                      <h1 style={{ color: 'white' }}>Hi {currentUser.email}, get ready for your next cleanup!</h1>
                      <div style={{ height: 1, backgroundColor: '#3EFFD1', width: '70%' }} />
                      <br />
                      <h1 style={{ color: 'white', fontSize: 24 }}>{events[index].name}</h1>
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
                        href={eventUrl}
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
            })
            .filter((_, index) => events[index].userID === currentUser.id)}
        </>
      </div>
    );
  }
  return (
    <div id='loading'>
      <img id='loading-image' src='loading/loading-gif.gif' alt='Loading...' />
    </div>
  );
}
