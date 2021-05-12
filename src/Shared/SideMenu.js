import 'antd/dist/antd.css';
import './SideMenu.css';
import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { TeamOutlined, UserOutlined, ClearOutlined, AimOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
// import Loadable from 'react-loadable';

// const LoadableBar = Loadable({
//   loader: () => import('./components/loading/Bar'),
//   loading() {
//     return <div>Loading...</div>
//   }
// });

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = ({ currentUser }) => {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapse() {
    setCollapsed(!collapsed);
  }

  if (currentUser) {
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo'>
          <Button
            className='homeButton'
            href='/home'
            key='1'
            style={{
              display: collapsed ? 'none' : '',
            }}
          >
            <h2 className='headerTitle'>CleanUp</h2>
          </Button>

          <a href='/home'>
            <img className='menuImg' src='./logo.png' alt='' />
          </a>
        </div>

        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1' icon={<ClearOutlined />}>
            <NavLink to='/home'>MeetUps</NavLink>
          </Menu.Item>
          <Menu.Item key='2' icon={<AimOutlined />}>
            <NavLink to='/myMeetUps'>My MeetUps</NavLink>
          </Menu.Item>
          <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>
              <NavLink to='/profile'>profile</NavLink>
            </Menu.Item>
            <Menu.Item key='4'>friends</Menu.Item>
            <Menu.Item key='5'>
              <NavLink to='/profile/edit'>Edit Profile</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='Teams'>
            <Menu.Item key='9'>Find Teams</Menu.Item>
            <Menu.Item key='6'>Project Jones Beach</Menu.Item>
            <Menu.Item key='8'>Team Find Trash</Menu.Item>
          </SubMenu>
          <Menu.Item key='10' icon={<EnvironmentOutlined />}>
            Map
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
  return null;
};

export default SideMenu;
