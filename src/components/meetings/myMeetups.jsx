import { React, useState } from 'react';
import eventsService from '../../services/events.service';
import userService from '../../services/user.service';
import { EventCarousel } from '../../Shared/Components';

/**
 *
 * Renders the page containing the current user's events
 * @component
 * @param {User} currentUser the current User
 * @return  {Component}            Return pages containing events organized and events attending aswell
 */
const MyMeetups = (props) => {
  const { currentUser } = props;
  const [events, setEvents] = useState('');
  const [userProfile, setUserProfile] = useState('');

  /**
   * Gets the User profile using the user service
   * @method
   * @returns {User} The current user object
   */
  const getUserProfile = async () => {
    const a = await userService.getUserProfile(currentUser.id);
    return a;
  };

  /**
   * Gets all events
   * @method
   * @returns {Events} Returns an array containing all the events
   */
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
      eventsService.updateSearch(response.data);
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

    /**
     * Renders the events that user is organizing
     * @method
     * @returns {EventCarousel} Creates a carousel from the filtered array of event(s)
     */
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

    /**
     * Renders the events that user is attending
     * @method
     * @returns {EventCarousel} Creates a carousel from the filtered array of event(s)
     */
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
};
export default MyMeetups;
