import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import Logout from './components/Home/Logout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register  />} />
        <Route path="/wylogowano" element={<Logout  />} />
      </Routes>
    </Router>
  );
}

export default App;