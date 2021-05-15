import { React, useState } from 'react';
import './home.less';
import '../../Shared/shared.less';
import { Row, Col, Space, Image, Button, Carousel, Card } from 'antd';
import {Link} from 'react-router-dom'
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
import eventsService from '../../services/events.service';
import Divider from '../../Shared/Components';
import ConvertDate from '../../Shared/Functions';

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

  const EventCarousel = () => {
    return (
      <div className='horizontal-pad'>
        <div className='page-title v-title-pad'>Your Upcoming Events</div>
        <Carousel slidesToShow={3} style={{ height: '350px' }}>
          {Object.keys(events).map((index) => {
            return (
              <Link to={`/event/${events[index].id}`}>
                <Row>
                  <Card
                    cover={<img src={events[index].img} alt='event' style={{ height: '180px' }} />}
                    style={{ width: '90%' }}
                  >
                    <h1>{events[index].name}</h1>
                    <p className='accent'>{ConvertDate(events[index].date)}</p>
                  </Card>
                </Row>
              </Link>
            );
          })}
        </Carousel>
      </div>
    );
  };

  const Banner = () => {
    const eventUrl = `/event/${events[0].id}`;
    return (
      <div
        // key={events[0].id}
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
            <div className='banner-subheader banner-text'>{events[0].name}</div>
            <Row>
              <Space>
                <AiOutlineCalendar color='#3EFFD1' size={24} />
                <Row gutter={24}>
                  <Col>
                    <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{ConvertDate(events[0].date)}</h4>
                  </Col>
                  <Col>
                    <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{events[0].time}</h4>
                  </Col>
                </Row>
              </Space>
            </Row>
            <Space>
              <AiOutlineEnvironment color='#3EFFD1' size={24} />
              <Row gutter={24}>
                <Col>
                  <text className='banner-text'>{events[0].locationName}</text>
                </Col>
                <Col>
                  <text className='banner-text'>{events[0].location}</text>
                </Col>
              </Row>
            </Space>
            <Row>
              <AiOutlineUsergroupAdd color='#3EFFD1' size={24} />
              <text className='banner-text'>{`${events[0].amount} people attending`}</text>
            </Row>
          </Col>
          <Col span={6}>
            <Image className='image' src={events[0].img} />
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
  };

  if (currentUser && currentUser.email && events !== '') {
    return (
      <div>
        <Banner />
        <EventCarousel />
      </div>
    );
  }
  return (
    <div id='loading'>
      <img id='loading-image' src='loading/loading-gif.gif' alt='Loading...' />
    </div>
  );
}
