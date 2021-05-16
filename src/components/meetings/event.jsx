import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import eventsService from '../../services/events.service';
import { Row, Col, Space,  Image,  Button } from 'antd';
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlinePlus, AiOutlineEdit, AiFillDelete} from 'react-icons/ai';
import ConvertDate from '../../Shared/Functions';
import Divider from '../../Shared/Components';
import '../../Shared/shared.less';
import '../homepage/home.less';
import RegisteredUsers from './components/RegisteredUsers';

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
  const editUrl = `${window.location.pathname}/edit`;;
    
  if (event === '') {
    getEvent(props.match.params.id).then((response) => {
      setEvent(response.data);
    });
  }

  if (event==null)  {
      return <h1 style={{ color: 'Green', fontSize: 72 }}>Oops Event does not exist...</h1>
    }
  
  const EditButton = () => {
    return (
      <Button href={editUrl} alt='' type='submit'>
          <div className='round-button-lg' >
            <Col>
              <Space>
                <div>Edit This Event</div>
                <AiOutlineEdit size={24} />
              </Space>
            </Col>
          </div>
        </Button>
    )
  }

  const DeleteButton = () => {
    return (
      <Button onClick={() => {
        deleteEvent(event.id).then(() => {
          history.push(`/myMeetUps`);
          window.location.reload();
        });
      }} 
      alt='' type='submit'>
          <div className='round-button-lg' >
            <Col>
              <Space>
                <div>Delete This Event</div>
                <AiFillDelete size={24} />
              </Space>
            </Col>
          </div>
        </Button>
    )
  }

  if (event !== '') {
    console.log(event)
    return (
      <div>
        <div style={{margin: '5%', padding: '5%', backgroundColor: 'white'}}>
          <Row>
            <Col span={12}>
              <Image src={event.img[0]} style={{borderTopLeftRadius: 10, height: '210px'}}/>
            </Col>
            <Col span={12} style={{borderTopRightRadius: 10, backgroundColor: '#F3F2F2', padding: '5%', height: '210px'}}>
              <Row>
                <AiOutlineCalendar color='#208970' size={24} style={{marginTop: '1.5%', marginRight: '1%'}}/>
                <div className="banner-subheader">Someday, {ConvertDate(event.date)}</div>
              </Row>
              <Row> 
                <AiOutlineEnvironment color='#208970' size={24}/>
                <div>{event.location}</div>
              </Row>
              <Col span={12} offset={4}>
                <Button
                  shape='round'
                  style={{
                    height: 40,
                    width: 200,
                    backgroundColor: '#AEFFCF',
                    borderRadius: 30,
                    borderColor: '#AEFFCF',
                  }}
                >
              <Col>
                <Space>
                  Join Event 
                  <AiOutlinePlus color='#208970' size={20} />
                </Space>
              </Col>
            </Button>
           </Col>
           
          </Col>
          
          <Col style={{paddingLeft: '2%', paddingRight: '2%'}}>
            <div className="banner-subheader">{event.name}</div>
            <div>{event.description} Description of event! Join us for a community bi-weekly cleanup here at Prospect Park. Gloves and trashbags are provided. Bring a friend or 2!</div>
            
            <Divider height={1} color='#C4C4C4'/>
            <Row>
              <AiOutlineUsergroupAdd/>
              <div>{`${event.amount} attending`}</div>
              
            </Row>
            <RegisteredUsers registered={event.registered}/>
          </Col>
         
          </Row>
        </div>
        <EditButton/>
        <DeleteButton />
      </div>
    );
  }
  return (
    <div id='loading'>
      <img id='loading-image' src='loading/loading-gif.gif' alt='Loading...' />
    </div>
  );
}