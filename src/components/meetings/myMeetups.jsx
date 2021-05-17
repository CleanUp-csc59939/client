import { React, useState } from 'react';
import eventsService from '../../services/events.service';
import Banner from './eventComponents/Banner';


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
    
    return (
      <div>
        
        <>
          {Object.keys(events)
            .map((index) => {
              
              return (
                  <Banner event={events[index]} currentUser = {currentUser} />
                
              );
            })
            .filter((_, index) => events[index].registered.includes(currentUser.id))}
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
