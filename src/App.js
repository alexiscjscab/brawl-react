import React, { useEffect } from 'react';


// fetch Brawlers
import { fetchBrawlers } from './store/slices/brawlers/index.js';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const brawlers = useSelector((state) => state.brawlers.list);

  useEffect(() => {
    dispatch(fetchBrawlers());
  }, [dispatch]);

  console.log(brawlers);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
