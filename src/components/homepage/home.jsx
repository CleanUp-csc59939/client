import { React, useState } from 'react';
import './home.less';
import { Row, Col, Space, Image, Button } from 'antd';
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
import eventsService from '../../services/events.service';
import Divider from '../../Shared/Components';

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
                  <h1 className='banner-text'>Hi {currentUser.email}, get ready for your next cleanup!</h1>
                  <Divider height={1} width='70%' color='#3EFFD1' />
                  <br />
                  <div className='banner-subheader banner-text'>{events[index].name}</div>
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
                        <text className='banner-text'>{events[index].locationName}</text>
                      </Col>
                      <Col>
                        <text className='banner-text'>{events[index].location}</text>
                      </Col>
                    </Row>
                  </Space>
                  <Row>
                    <AiOutlineUsergroupAdd color='#3EFFD1' size={24} />
                    <text className='banner-text'>{`${events[index].amount} people attending`}</text>
                  </Row>
                </Col>
                <Col span={6}>
                  <Image className='image' src={events[index].img} />
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
