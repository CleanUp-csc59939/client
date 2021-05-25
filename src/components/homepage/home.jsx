import { React, useState } from 'react';
import './home.less';
import '../../Shared/shared.less';
import { Row, Carousel, Card } from 'antd';
import { Link } from 'react-router-dom';
import eventsService from '../../services/events.service';
import { ConvertDate } from '../../Shared/Functions';
import Banner from '../meetings/eventComponents/Banner';

const getEvents = async () => {
  const a = await eventsService.getEvents();
  return a;
};

/**
 *
 * return home page with multiple user events types*
 * @component
 * @return  {Component}            Return Home page showing the user's events
 */

const Home = (props) => {
  const [events, setEvents] = useState('');

  if (events === '') {
    getEvents().then((response) => {
      setEvents(response.data);
    }); // the [1] is showing only that single event
  }

  const { currentUser } = props;

  /**
   * Creates a carousel of events
   * @method
   * @returns {HTMLBodyElement} Returns the HTML code for user's event's in the carousel
   */

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
                    cover={<img src={events[index].img[0]} alt='event' style={{ height: '230px' }} />}
                    style={{ width: '75%' }}
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

  console.log(events[0]);

  /**
   * Creates a Banner with the User's top event
   * @property checks events of current user
   * @returns {Banner} Returns the components to make the user events banner
   * @returns {EventCarousel} Returns the components to make the carousel extra user events
   */

  if (currentUser && currentUser.email && events !== '' && events.length > 0) {
    return (
      <div>
        <Banner currentUser={currentUser} event={events[0]} />
        <EventCarousel />
      </div>
    );
  }

  if (events !== '' && events.length === 0) {
    return <div>There are no events to show</div>;
  }
  return (
    <div id='loading'>
      <img id='loading-image' src='loading/loading-gif.gif' alt='Loading...' />
    </div>
  );
};
export default Home;
