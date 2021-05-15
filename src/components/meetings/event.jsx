import { React, useState } from 'react';
import { Row, Col, Space, Image, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
import eventsService from '../../services/events.service';

const getEvent = async (userID) => {
  const a = await eventsService.getSingleEvent(userID);
  return a;
};

const deleteEvent = async (userID) => {
  const a = await eventsService.deleteEvent(userID);
  return a;
};

export default function SingleEvent(props) {
  const [event, setEvent] = useState('');
  const history = useHistory();
  const editUrl = `${window.location.pathname}/edit`;
  if (event === '') {
    getEvent(props.match.params.id).then((response) => {
      setEvent(response.data);
    }); 
  }

 
  if (event == null) {
    return <h1 style={{ color: 'Green', fontSize: 72 }}>Oops Event does not exist...</h1>;
  }

  if (event !== '') {
    return (
      <div>
        
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

          <a href={editUrl} alt='' type='submit'>
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

          
          <Button
          key='delete'
            onClick={() => {deleteEvent(event.id).then(() => {
              history.push(`/myMeetUps`);
              window.location.reload();
            })}}
            shape='round'
            style={{ height: 60, width: 240, backgroundColor: '#3EFFD1', borderRadius: 60, borderColor: '#3EFFD1' }}
          >
            <Col>
              <Space>
                Delete This Event
                <AiOutlineArrowRight size={20} />
              </Space>
            </Col>
          </Button>
       

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
