import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const brawlersSlice = createSlice({
  name: 'brawlers',
  initialState: {
    list: [],
  },
  reducers: {
    setBrawlers: (state, action) => {
      state.list = action.payload;
    },
  },
});


export const { setBrawlers } = brawlersSlice.actions;

export default brawlersSlice.reducer;

export const fetchBrawlers = () => async (dispatch) => {
  const response = await axios.get('https://api.brawlapi.com/v1/brawlers');
  dispatch(setBrawlers(response.data.list));
}