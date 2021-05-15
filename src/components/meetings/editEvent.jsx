import { React, useState } from 'react';
import { FormWebEdit } from './meetingForm';
import eventsService from '../../services/events.service';
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { Button } from 'antd';

// import "bootstrap/dist/css/bootstrap.min.css";

const updateEvent = async (eventID, Name, Desc, Location, Img, Date, Type, Amount) => {
  const a = await eventsService.editEvent(eventID, Name, Desc, Location, Img, Date, Type, Amount);
  return a;
};

const getEvent = async (userID) => {
    const a = await eventsService.getSingleEvent(userID);
    return a;
  };

export default function EditEvent(props) {
    const [event, setEvent] = useState('');
    const history = useHistory();
 
  if (event === '') {
    getEvent(props.match.params.id).then((response) => {
      setEvent(response.data);
    }); // the [1] is showing only that single event
  }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    updateEvent(
      props.match.params.id,
      values.name ? values.name : event.name, // name
      values.desc ? values.desc : event.desc, // bio
      values.location ? values.location : event.location,
      values.img ? values.img : event.img,
      values.date ? values.date : event.date,
      values.type ? values.type : event.type,
      values.amount ? values.amount : event.amount,
    ).then(
      () => {
        console.log('Success:', values);
        history.push(`/event/${props.match.params.id}`);
        window.location.reload();
      },
      () => {
        onFinishFailed('Form unable to submit');
      },
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Create MeetUp</h1>
      <div className='web'>
        <FormWebEdit 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name={event.name}
        location={event.location}
        desc = {event.desc}
        type = {event.type}
        amount = {event.amount}
        date = {event.date}
        img = {event.img}
        />
      </div>
    </div>
  );
}
