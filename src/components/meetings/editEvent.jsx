import { React, useState } from 'react';
import { FormWebEdit } from './meetingForm';
import eventsService from '../../services/events.service';
import { useHistory } from 'react-router-dom';
import EventPics from './eventComponents/eventPics';
// import { useHistory } from 'react-router-dom';
// import { Button } from 'antd';

// import "bootstrap/dist/css/bootstrap.min.css";

const updateEvent = async (eventID, Name, Desc, Location, Date, Type) => {
  const a = await eventsService.editEvent(eventID, Name, Desc, Location, Date, Type);
  return a;
};

const getEvent = async (userID) => {
  const a = await eventsService.getSingleEvent(userID);
  return a;
};

export default function EditEvent(props) {
  const [event, setEvent] = useState('');
  const history = useHistory();

  const getID = () => {
    return props.match.params.id;
  };

  if (event === '') {
    getEvent(props.match.params.id).then((response) => {
      setEvent(response.data);
    }); // the [1] is showing only that single event
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    console.log(values.date);
    updateEvent(
      props.match.params.id,
      values.name ? values.name : event.name, // name
      values.desc ? values.desc : event.desc, // bio
      values.location ? values.location : event.location,
      values.date ? values.date : event.date,
      values.type ? values.type : event.type,
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
      <h1 style={{ textAlign: 'center' }}>Edit MeetUp</h1>
      <div className='web'>
        <FormWebEdit
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name={event.name}
          location={event.location}
          desc={event.desc}
          type={event.type}
          date={event.date}
        >
        </FormWebEdit>
        <div style={{ textAlign: 'center' }}>
        <EventPics id={getID} />
        </div>
      </div>
    </div>
  );
}
