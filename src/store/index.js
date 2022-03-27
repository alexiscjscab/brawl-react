import { configureStore } from '@reduxjs/toolkit';

import brawlers from './slices/brawlers/index.js';
import maps from './slices/maps/index.js';
import game from './slices/gameModes/index.js';

const store = configureStore({
  reducer: {
    brawlers,
    maps,
    game
  },
});

export default store;