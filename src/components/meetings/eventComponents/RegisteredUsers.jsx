import { Row, Col, Avatar, Space } from 'antd';
import TextTruncate from 'react-text-truncate'; 

const RegisteredUsers = (props) => {
  const { registered } = props;
  // console.log(registered)
  const registers = registered.map((user) => {
    return (
      <div style={{ backgroundColor: '#F3F2F2', height: 150, width: 100, paddingTop: '10%' }}>
        <Col>
          <Avatar source={user.img} size={50} style={{marginLeft: 25}}/>
          <div style={{ paddingTop: '15%', marginLeft: 8, marginRight: 8, justifyItems: 'center', flexDirection: 'row' }}>
            <TextTruncate  
              style={{ textAlign: 'center'}}
              element="span"
              text={user.name}
              line={2}
            />
            <div style={{ textAlign: 'center', color: '#A9A9A9' }}>{user.location}</div>
          </div>
        </Col>
      </div>
    );
  });
  return (
    <Row>
      <Space>{registers}</Space>
    </Row>
  );
};

export default RegisteredUsers;
