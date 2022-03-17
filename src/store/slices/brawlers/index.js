import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const brawlersSlice = createSlice({
  name: 'brawlers',
  initialState: {
    list: [],
    originalList: [],
    rarity: []
  },
  reducers: {
    setBrawlers: (state, action) => {
      state.list = action.payload;
      state.originalList = action.payload;
      state.rarity = noRepeatRarity(state);
    },
    setSearchBrawlers: (state, action) => {
      const search = action.payload;
      state.list = state.originalList.filter((brawler) => brawler.name.toLowerCase().includes(search.toLowerCase()));
      
    },
    setResetBrawlers: (state, action) => {
      state.list = state.originalList;
    },
    setFilterRarity: (state, action) => {
      const rarity = action.payload;
      rarity === 'ALL' ? state.list = state.originalList : state.list = state.originalList.filter((brawler) => brawler.rarity.name === rarity);
    }
  },
});

export default brawlersSlice.reducer;

export const { setBrawlers, setSearchBrawlers, setResetBrawlers, setFilterRarity  } = brawlersSlice.actions;


export const fetchBrawlers = () => async (dispatch) => {
  const response = await axios.get('https://api.brawlapi.com/v1/brawlers');
  dispatch(setBrawlers(response.data.list));
}

export const searchBrawlers = (data) => async (dispatch) => {
  dispatch(setSearchBrawlers(data));
}

export const resetBrawlers = () => async (dispatch) => {
  dispatch(setResetBrawlers());
}

export const filterRarity = (data) => async (dispatch) => {
  dispatch(setFilterRarity(data));
}

// funcion para no repetir las raritys
function noRepeatRarity (state) {
  // filtro para que no se repitan las raritys
  const rarity = [...new Set(state.list.map(brawler => brawler.rarity.name))];
  // le agrego el ALL para usarlo en el filtro
  return [...rarity, 'ALL'];
}