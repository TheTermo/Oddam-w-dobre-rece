import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/registration" element={<Registration />} /> */}
      </Routes>
    </Router>
  );
}

export default App;