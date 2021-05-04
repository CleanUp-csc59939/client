import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './Shared/Header';
import Home from './components/homepage/home';
import Login from './components/login/login';
import SignUp from './components/signup/SignUp';
import PageLayout from './Shared/PageLayout';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const loggedIn = false;
  return (
    <div>
      <PageLayout />

      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/signup'>
            <SignUp />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
