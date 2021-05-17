import React from 'react';
import { FormWeb } from './meetingForm';
import eventsService from '../../services/events.service';
import { useHistory } from 'react-router-dom';

export default function CreateMeetUp({ currentUser }) {
  const history = useHistory();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const updateSearch = async () => {
    console.log("in update search")
    const events = await eventsService.getEvents()
    if (events === '') {
      getEvents().then((response) => {
        setEvents(response.data);
        eventsService.updateSearch(response.data)
      }); // the [1] is showing only that single event
    }
  }

  const onFinish = (values) => {
    eventsService
      .createEvent(
        currentUser.id,
        values.name, // name
        values.desc, // description
        values.location,
        values.date,
        values.type,
      )
      .then(
         () => {
          console.log('Success:', values);
          updateSearch()
          history.push('/myMeetUps');
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
        <FormWeb onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </div>
    </div>
  );
}
