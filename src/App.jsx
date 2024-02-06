import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Banner from './Banner/Banner';
import Description from './Description/Description';
import Photos from './Photos/Photos';
import We from './We/We';
import Check from './Check-in-out/Check';
import Ubicacion from './Ubication/Ubicacion';
import Bubble from './Bubble/Bubble';
import { BrowserRouter as Router, Route} from 'react-router-dom';
function App() {


  return (
    <>
      <Bubble/>
      <Nav/>
      <Banner/>
      <Description/>
      <Photos/>
      <We/>
      <Check/>
      <Ubicacion/>
    </>
  )
}

export default App
