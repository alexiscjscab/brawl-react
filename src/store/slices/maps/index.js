import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const mapsSlice = createSlice({
  name: 'maps',
  initialState: {
    list: [],
    originalList: [],
  },
  reducers: {
    setMaps: (state, action) => {
      state.list = action.payload;
      state.originalList = action.payload;
    },
  },
});

export default mapsSlice.reducer;

export const { setMaps } = mapsSlice.actions;

export const fetchMaps = () => async (dispatch) => {
  const response = await axios.get('https://api.brawlapi.com/v1/maps');
  dispatch(setMaps(response.data.list));
}