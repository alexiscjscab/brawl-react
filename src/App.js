import React from 'react';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';



const App = () => {
  

  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
