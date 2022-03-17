import React from 'react';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Maps from './pages/Maps/Maps';



const App = () => {
  

  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
