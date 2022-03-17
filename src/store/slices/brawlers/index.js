import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const brawlersSlice = createSlice({
  name: 'brawlers',
  initialState: {
    list: [],
    originalList: [],
    rarity: [],
  },
  reducers: {
    setBrawlers: (state, action) => {
      state.list = action.payload;
      state.originalList = action.payload;
      state.rarity = noRepeatRarity(state);
    },
    setSearchBrawlers: (state, action) => {
      const search = action.payload;
      state.list = state.originalList.filter((brawler) =>
        brawler.name.toLowerCase().includes(search.toLowerCase())
      );
    },
    setResetBrawlers: (state, action) => {
      state.list = state.originalList;
    },
    setFilterRarity: (state, action) => {
      const rarity = action.payload;
      rarity === 'ALL'
        ? (state.list = state.originalList)
        : (state.list = state.originalList.filter(
            (brawler) => brawler.rarity.name === rarity
          ));
    },
    setSortBrawlers: (state, action) => {
      const sort = action.payload;
      sort === 'A-Z'
        ? (state.list = state.originalList.sort(sortAsc))
        : (state.list = state.originalList.sort(sortDesc));
    },
  },
});

export default brawlersSlice.reducer;

export const {
  setBrawlers,
  setSearchBrawlers,
  setResetBrawlers,
  setFilterRarity,
  setSortBrawlers,
} = brawlersSlice.actions;

export const fetchBrawlers = () => async (dispatch) => {
  const response = await axios.get('https://api.brawlapi.com/v1/brawlers');
  dispatch(setBrawlers(response.data.list));
};

export const searchBrawlers = (data) => async (dispatch) => {
  dispatch(setSearchBrawlers(data));
};

export const resetBrawlers = () => async (dispatch) => {
  dispatch(setResetBrawlers());
};

export const filterRarity = (data) => async (dispatch) => {
  dispatch(setFilterRarity(data));
};

export const sortBrawlers = (data) => async (dispatch) => {
  dispatch(setSortBrawlers(data));
};

// funcion para no repetir las raritys
function noRepeatRarity(state) {
  // filtro para que no se repitan las raritys
  const rarity = state.originalList.map((brawler) => {
    return {
      name: brawler.rarity.name,
      color: brawler.rarity.color,
    };
  });
  // eliminar repetidos
  const nameMap = rarity.map((brawler) => {
    return [brawler.name, brawler];
  });
  const nameMapArr = new Map(nameMap);

  // le agrego el ALL para usarlo en el filtro
  return [...nameMapArr.values(), { name: 'ALL', color: '#fff' }];
}

function sortAsc(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function sortDesc(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
}
