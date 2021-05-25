import { Row, Carousel, Card } from 'antd';
import { Link } from 'react-router-dom';
import { ConvertDate } from './Functions';
import './shared.less';
import '../components/homepage/home.less';
/**
 * 
 * @param {*} props 
 * @returns a line with custom color, height, width
 * 
 */
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
  const { titleText, events, slidesToShow } = props;

  return (
    <div>
      <h2 className='big-title v-title-pad horizontal-pad'>{titleText}</h2>

      {slidesToShow === 1 ? (
        <Carousel slidesToShow={slidesToShow} className={slidesToShow === 1 ? 'xtra-horizontal-pad' : 'horizontal-pad'}>
          {Object.keys(events).map((index) => {
            return (
              <Link to={`/event/${events[index].id}`} key={index}>
                <Row>
                  <Card
                    cover={<img src={events[index].img[0]} alt='event' style={{ height: '400px' }} />}
                    style={{ width: '60%' }}
                  >
                    <h1>{events[index].name}</h1>
                    <p className='accent'>{ConvertDate(events[index].date)}</p>
                  </Card>
                </Row>
              </Link>
            );
          })}
        </Carousel>
      ) : (
        <Carousel slidesToShow={slidesToShow} className={slidesToShow === 1 ? 'xtra-horizontal-pad' : 'horizontal-pad'}>
          {Object.keys(events).map((index) => {
            return (
              <Link to={`/event/${events[index].id}`} key={index}>
                <Row>
                  <Card
                    cover={<img src={events[index].img[0]} alt='event' style={{ height: '300px' }} />}
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
      )}
    </div>
  );
};
