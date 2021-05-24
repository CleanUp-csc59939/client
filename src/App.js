import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './Shared/Header';
import { Layout } from 'antd';
import Unauthorized from './components/unauth/Unauthorized';
import Home from './components/homepage/home';
import Login from './components/login/login';
import SignUp from './components/signup/SignUp';
import AuthService from './services/auth.service';
import Header from './Shared/Header';
import ProtectedRoute from './components/unauth/ProtectedRoute';
import Profile from './components/profile/profile';
import EditProfile from './components/profile/editProfile';
import MyMeetups from './components/meetings/myMeetups';
import CreateMeetUp from './components/meetings/createMeetUp';
import SingleEvent from './components/meetings/event';
import EditEvent from './components/meetings/editEvent';
// import "bootstrap/dist/css/bootstrap.min.css";
const getUser = () => {
  const user = AuthService.getCurrentUser();
  console.log('current User');
  return user;
};

const { Content, Footer } = Layout;
function App() {
  const currentUser = getUser();
  const [overlay, setOverlay] = useState(false);
  const [pageTitle, setTitle] = useState(window.location.pathname.slice(1));

  if (pageTitle !== window.location.pathname.slice(1)) setTitle(window.location.pathname.slice(1)); // Updating the header title, needs work

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Layout className='site-layout'>
            <Header currentUser={currentUser} pageTitle={pageTitle} setOverlay={setOverlay} />
            <Content style={{ margin: '0 0', backgroundColor: overlay ? 'rgba(52,52,52,0.3)' : null }}>
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
                <ProtectedRoute
                  exact
                  path='/myMeetUps'
                  component={MyMeetups}
                  user={currentUser}
                  currentUser={currentUser}
                />
                <ProtectedRoute
                  exact
                  path='/myMeetUps/create'
                  component={CreateMeetUp}
                  user={currentUser}
                  currentUser={currentUser}
                />
                <ProtectedRoute
                  exact
                  path='/event/:id'
                  component={SingleEvent}
                  user={currentUser}
                  currentUser={currentUser}
                />
                <ProtectedRoute exact path='/event/:id/edit' component={EditEvent} user={currentUser} />
                <ProtectedRoute exact path='/profile/edit' component={EditProfile} user={currentUser} />

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
