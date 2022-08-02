import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import SignInSide from './Components/SingIn/SignInSide';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <SignInSide />
  );
}

export default App;
