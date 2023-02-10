import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import SignIn from './Signin';
import SignUp from './Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/signup' component={SignUp} exact />
      </Routes>
    </Router>
  );
}

export default App;
