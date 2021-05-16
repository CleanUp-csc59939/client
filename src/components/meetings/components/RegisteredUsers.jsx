
import { Row, Col,  Avatar } from 'antd';

const RegisteredUsers = (props) => {
    const {registered} = props
    // console.log(registered)
    const registers = registered.map((user) => {
        return (
          <Row>
            <Col>
              <div style={{backgroundColor: '#F3F2F2', height: 150, width: 100}}>
                <Col style={{padding: '5%'}}>
                
                  <Avatar
                    source={user.img}
                    size={50}
                  />
                    <div style={{paddingTop: '5%'}}>
                        <div style={{textAlign: 'center'}}>{user.name}</div>
                        <div style={{textAlign: 'center', color: '#A9A9A9'}}>{user.location}</div>
                    </div>
                </Col>
               
              </div>
            </Col>
          </Row>
        )
      })
      return registers
}

export default RegisteredUsers;