import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import SignIn from './Signin';
import SignUp from './Signup';

function App() {
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
