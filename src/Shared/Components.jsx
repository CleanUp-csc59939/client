import { Row, Carousel, Card } from 'antd';
import { Link } from 'react-router-dom';
import {ConvertDate} from './Functions';
import './shared.less';
import '../components/homepage/home.less'

export const Divider = (props) => {
  const { height, color, width } = props;
  return (
    <div
      style={{
        height,
        backgroundColor: color,
        width,
      }}
    />
  );
};

export const EventCarousel = (props) => {
  const {titleText, events, slidesToShow} = props
  console.log("event carousel")
  return (
    <div className='horizontal-pad'>
      <h2 className='big-title v-title-pad'>{titleText}</h2>
      <Carousel slidesToShow={slidesToShow} >
        {Object.keys(events).map((index) => {
          return (
            <Link to={`/event/${events[index].id}`} key={index}>
              <Row>
                <Card
                  cover={<img src={events[index].img} alt='event' style={{ height: '180px' }} />}
                  style={{ width: '90%' }}
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
