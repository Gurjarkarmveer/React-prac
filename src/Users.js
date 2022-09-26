import logo from './logo.svg';
import './App.css';
import Navigation2 from './Navigation2';
import Mycarousel from './Carousel';
import CardExam from './CardExam';
import NewCard from './NewCard';
import Box from './Box';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function Users() {
  return (

      <div>

        <Mycarousel></Mycarousel>
        <center><h2><b>Famous photographer of India</b></h2></center>
        <CardExam></CardExam>
        <hr></hr>
        <NewCard></NewCard>
        <hr></hr>
        <Box></Box>
      </div>
  );
}

export default Users;