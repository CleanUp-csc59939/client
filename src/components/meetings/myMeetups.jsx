import { React, useState } from 'react';
// import { Row, Col, Space, Image, Button } from 'antd';
// import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
import eventsService from '../../services/events.service';
import userService from '../../services/user.service';
import { EventCarousel } from '../../Shared/Components';

// const getEvents = async () => {
//   const a = await eventsService.getEvents();
//   return a;
// };

export default function MyMeetups(props) {
  const { currentUser } = props;
  const [events, setEvents] = useState('');
  const [userProfile, setUserProfile] = useState('');

  const getUserProfile = async () => {
    const a = await userService.getUserProfile(currentUser.id);
    return a;
  };

  const getEvents = async () => {
    const a = await eventsService.getEvents();
    return a;
  };

  if (userProfile === '') {
    getUserProfile().then((response) => {
      setUserProfile(response.data);
    });
  }

  if (events === '') {
    getEvents().then((response) => {
      setEvents(response.data);
      eventsService.updateSearch(response.data)
    }); // the [1] is showing only that single event
  }

  if (currentUser && currentUser.email && events !== '' && userProfile !== '') {
    const myEvents = [];
    const eventsAttending = userProfile.events;

    // get a user's events
    Object.keys(events).forEach((event) => {
      if (events[event].userID === currentUser.id) {
        myEvents.push(events[event]);
      }
    });

    const renderMyEvents = () => {
      let e = <div>You are not organizing any upcoming events</div>;
      if (myEvents.length === 0) {
        e = <div>You are not organizing any upcoming events</div>;
      } else if (myEvents.length === 1) {
        e = <EventCarousel titleText='Event Organized By You' events={myEvents} slidesToShow={1} />;
      } else {
        e = <EventCarousel titleText='Events Organized By You' events={myEvents} slidesToShow={3} />;
      }
      return e;
    };

    const renderAttendingEvents = () => {
      let e = <div>You are not attending any upcoming events</div>;
      if (eventsAttending.length === 0) {
        e = <div>You are not organizing any upcoming events</div>;
      } else if (eventsAttending.length === 1) {
        e = <EventCarousel titleText='Event Attending' events={eventsAttending} slidesToShow={1} />;
      } else {
        e = <EventCarousel titleText='Events Attending' events={eventsAttending} slidesToShow={3} />;
      }
      return e;
    };

    return (
      <div>
        {renderMyEvents()}
        {renderAttendingEvents()}
      </div>
    );
  }

  return (
    <div id='loading'>
      <img id='loading-image' src='loading/loading-gif.gif' alt='Loading...' />
    </div>
  );
}
