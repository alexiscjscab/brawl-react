import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const mapsSlice = createSlice({
  name: 'maps',
  initialState: {
    list: [],
    originalList: [],
    gameMode: [],
  },
  reducers: {
    setMaps: (state, action) => {
      state.list = action.payload;
      state.originalList = action.payload;
      state.gameMode = noRepeatGameMode(state);
    },
    setFilterGameMode: (state, action) => {
      const game = action.payload;
      game === 'ALL'
        ? (state.list = state.originalList)
        : (state.list = state.originalList.filter(
            (map) => map.gameMode.name === game
          ));
    }
  },
});

export default mapsSlice.reducer;

export const { setMaps, setFilterGameMode } = mapsSlice.actions;

export const fetchMaps = () => async (dispatch) => {
  const response = await axios.get('https://api.brawlapi.com/v1/maps');
  dispatch(setMaps(response.data.list));
}

export const filterGameMode =  (data) => async (dispatch) => {
  dispatch(setFilterGameMode(data));
}


function noRepeatGameMode(state){
  const game = state.originalList.map((map) => {
    return {
      name: map.gameMode.name,
      image: map.gameMode.imageUrl
    };
  });
  const nameMap = game.map((map) => {
    return [map.name, map];
  });
  const unique = new Map(nameMap);

  return [...unique.values(), {name: 'ALL', image: 'https://lh3.googleusercontent.com/l1J0x4Kg12WEsHw_R3AgyIJayRdQ7UVJXO4aQUj3eoeeWAdWSnHN8gdJ4wOTrfVvQCaO=s180'}];
}