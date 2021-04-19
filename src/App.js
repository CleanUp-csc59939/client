import './App.css';
import Header from './Shared/Header';
import SignUp from './SignUp/SignUp';

function App() {
  const loggedIn = true;
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <SignUp />
    </div>
  );
}

export default App;
