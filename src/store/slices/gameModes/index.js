import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    list: [],
  },
  reducers : {
    setGame: (state, action) => {
      state.list = action.payload;
    }
  }
});

export default gameSlice.reducer;

export const { setGame } = gameSlice.actions;


export const fetchGame = () => async (dispatch) => {
  const response = await axios.get('https://api.brawlapi.com/v1/gamemodes');
  dispatch(setGame(response.data.list));
};