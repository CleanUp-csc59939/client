import 'antd/dist/antd.css';
import './PageLayout.css';
import { useState } from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { TeamOutlined, UserOutlined, ClearOutlined, AimOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Header from './Header';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const loggedIn = true;
  const pageTitle = 'Home';
  function onCollapse() {
    console.log(collapsed);
    setCollapsed(!collapsed);
  }
  if (loggedIn) {
    return (
      <Layout style={{ minHeight: '100vh' }}>
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
              MeetUps
            </Menu.Item>
            <Menu.Item key='2' icon={<AimOutlined />}>
              My MeetUps
            </Menu.Item>
            <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
              <Menu.Item key='3'>profile</Menu.Item>
              <Menu.Item key='4'>friends</Menu.Item>
              <Menu.Item key='5'>user settings</Menu.Item>
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
        <Layout className='site-layout'>
          <Header loggedIn={loggedIn} pageTitle={pageTitle} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }

  return <Header loggedIn={loggedIn} pageTitle={pageTitle} />;
};

export default PageLayout;