import { configureStore } from '@reduxjs/toolkit';

import brawlers from './slices/brawlers/index.js';
import maps from './slices/maps/index.js';

const store = configureStore({
  reducer: {
    brawlers,
    maps,
  },
});

export default store;