
import './App.css';
import Login from './Component/Firebase/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/:id' element={} */}
      </Routes>

    </Router>
  );
}

export default App;
