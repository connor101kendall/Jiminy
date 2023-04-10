import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import SignIn from './Signin';
import SignUp from './Signup';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <img src='images/loading-gif.gif' alt='Loading...'/>
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup'element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
