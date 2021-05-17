import { React } from 'react';
import { Col, Space, Button } from 'antd';
import { AiOutlinePlus, AiOutlineEdit, AiFillDelete, AiOutlineCloseCircle } from 'react-icons/ai';

import '../../../Shared/shared.less';
import '../../homepage/home.less';

export const Edit = (props) => {
  const { editUrl } = props;
  return (
    <Button href={editUrl} alt='' type='submit'>
      <div className='round-button-lg'>
        <Col>
          <Space>
            <div>Edit This Event</div>
            <AiOutlineEdit size={24} />
          </Space>
        </Col>
      </div>
    </Button>
  );
};

export const Delete = (props) => {
  const { event, deleteEvent, history } = props;
  return (
    <Button
      onClick={() => {
        deleteEvent(event.id).then(() => {
          history.push(`/myMeetUps`);
          window.location.reload();
        });
        history.push(`/myMeetUps`);
        console.log('pressed delete', event);
      }}
      alt=''
      type='submit'
    >
      <div className='round-button-lg'>
        <Col>
          <Space>
            <div>Delete This Event</div>
            <AiFillDelete size={24} />
          </Space>
        </Col>
      </div>
    </Button>
  );
};

export const Join = (props) => {
  const { eventID, userID, joinEvent } = props;
  return (
    <Col span={12} offset={4}>
      <Button
        onClick={() => {
          joinEvent(eventID, userID).then(() => {
            window.location.reload();
            console.log('event joined');
          });
        }}
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
  );
};

export const Leave = (props) => {
  const { eventID, userID, leaveEvent } = props;
  return (
    <Col span={12} offset={4}>
      <Button
        onClick={() => {
          leaveEvent(eventID, userID).then(() => {
            window.location.reload();
            console.log('left event');
          });
        }}
        shape='round'
        style={{
          height: 40,
          width: 200,
          backgroundColor: '#eb4242',
          borderRadius: 30,
          borderColor: '#eb4242',
        }}
      >
        <Col>
          <Space>
            Leave Event
            <AiOutlineCloseCircle color='#ffffff' size={20} />
          </Space>
        </Col>
      </Button>
    </Col>
  );
};
