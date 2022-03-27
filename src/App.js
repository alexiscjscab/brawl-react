import React from 'react';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Maps from './pages/Maps/Maps';
import Game from './pages/Game/Game';


const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/brawl-react" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
