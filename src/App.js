
import './App.css';
import Login from './Component/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { UserHome } from './Component/UserHome';

function App() {

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/:id' element={<UserHome />} />
      </Routes>

    </Router>
  );
}

export default App;
