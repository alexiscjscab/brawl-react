import { configureStore } from '@reduxjs/toolkit';

import brawlers from './slices/brawlers/index.js';


const store = configureStore({
  reducer: {
    brawlers,
  },
});

export default store;