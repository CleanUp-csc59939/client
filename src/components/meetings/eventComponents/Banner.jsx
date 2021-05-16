import { React } from 'react';
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUsergroupAdd, AiOutlineArrowRight } from 'react-icons/ai';
import Divider from '../../../Shared/Components';
import { Row, Col, Space, Image, Button,} from 'antd';


const Banner = (props) => {
    const { currentUser, events } = props;
    const eventUrl = `/event/${events[0].id}`;
    return (
      <div
        // key={events[0].id}
        style={{
          backgroundColor: '#208970',
          paddingTop: '80px',
          paddingBottom: '100px',
          marginBottom: '50px',
          marginTop: '50px',
        }}
      >
        <Row>
          <Col span={12} offset={4}>
            <h1 className='banner-text'>Hi {currentUser.email}, get ready for your next cleanup!</h1>
            <Divider height={1} width='70%' color='#3EFFD1' />
            <br />
            <div className='banner-subheader banner-text'>{events[0].name}</div>
            <Row>
              <Space>
                <AiOutlineCalendar color='#3EFFD1' size={24} />
                <Row gutter={24}>
                  <Col>
                    <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{ConvertDate(events[0].date)}</h4>
                  </Col>
                  <Col>
                    <h4 style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{events[0].time}</h4>
                  </Col>
                </Row>
              </Space>
            </Row>
            <Space>
              <AiOutlineEnvironment color='#3EFFD1' size={24} />
              <Row gutter={24}>
                <Col>
                  <text className='banner-text'>{events[0].locationName}</text>
                </Col>
                <Col>
                  <text className='banner-text'>{events[0].location}</text>
                </Col>
              </Row>
            </Space>
            <Row>
              <AiOutlineUsergroupAdd color='#3EFFD1' size={24} />
              <text className='banner-text'>{`${events[0].amount} people attending`}</text>
            </Row>
          </Col>
          <Col span={6}>
            <Image className='image' src={events[0].img} />
          </Col>
          <Col span={12} offset={4}>
            <Button
              shape='round'
              style={{
                height: 40,
                width: 200,
                backgroundColor: '#3EFFD1',
                borderRadius: 30,
                borderColor: '#3EFFD1',
              }}
              href={eventUrl}
            >
              <Col>
                <Space>
                  More details
                  <AiOutlineArrowRight size={20} />
                </Space>
              </Col>
            </Button>
          </Col>
        </Row>
      </div>
    );
  };

  export default Banner;