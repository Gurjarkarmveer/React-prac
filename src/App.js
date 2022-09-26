import logo from './logo.svg';
import './App.css';
import Navigation2 from './Navigation2';
import Mycarousel from './Carousel';
import CardExam from './CardExam';
import NewCard from './NewCard';
import Box from './Box';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Users from './Users';

function App() {
  return (
    <Router>
      <Navigation2></Navigation2>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/"element={<Users/>}></Route>
      </Routes>


     <Footer></Footer>


    </Router>
  );
}

export default App;
