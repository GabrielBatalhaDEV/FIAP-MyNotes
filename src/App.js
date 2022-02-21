import Login from './Pages/Login.jsx'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom' 
import './app.css'
import Home from './Pages/Home.jsx';
import Board from './Pages/Board.jsx';


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/board' element={<Board />}></Route>
      </Routes>
    </Router>
    );
}

export default App;
