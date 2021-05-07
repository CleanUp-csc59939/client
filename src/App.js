import './App.css';
// import  {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './Shared/Header';
import { Layout } from 'antd';
import Unauthorized from './components/unauth/Unauthorized';
import Home from './components/homepage/home';
import Login from './components/login/login';
import SignUp from './components/signup/SignUp';
import SideMenu from './Shared/SideMenu';
import AuthService from './services/auth.service';
// import ProtectedRoute from './components/unauth/ProtectedRoute'
import Header from './Shared/Header';
import ProtectedRoute from './components/unauth/ProtectedRoute';
import Profile from './components/profile/profile';

// import "bootstrap/dist/css/bootstrap.min.css";
const getUser = () => {
  const user = AuthService.getCurrentUser();
  console.log('current User');
  return user;
};

const { Content, Footer } = Layout;
const pageTitle = 'Home';
function App() {
  const currentUser = getUser();
  //  const [currentUser, setCurrentUser] = useState(undefined);
  // const loggedIn = false;

  // console.log(currentUser)
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <SideMenu currentUser={currentUser} />
          <Layout className='site-layout'>
            <Header currentUser={currentUser} pageTitle={pageTitle} />

            <Content style={{ margin: '0 0' }}>
              <Switch>
                <Route exact path='/login'>
                  <Login />
                </Route>
                <Route exact path='/signup'>
                  <SignUp />
                </Route>
                <Route exact path='/home'>
                  <Home currentUser={currentUser} />
                </Route>
                <Route exact path='/unauthorized' component={Unauthorized} />
                <ProtectedRoute exact path='/profile' component={Profile} user={currentUser} />

                <ProtectedRoute path='/' component={Home} user={currentUser} />
              </Switch>
            </Content>

            <Footer style={{ textAlign: 'center' }}>CleanUp App ©2021</Footer>
          </Layout>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
