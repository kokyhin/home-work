import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skip: 0,
  limit: 30,
  total: 0,
  search: '',
  category: 'All categories',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    changePage: (state, { payload }) => {
      state.skip = payload;
    },
    updateLimit: (state, { payload }) => {
      state.limit = payload;
    },
    setPagination: (state, { payload: { skip, limit, total } }) => {
      state.skip = skip;
      state.limit = limit;
      state.total = total;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    resetFilter: () => initialState,
  },
});

export const {
  setPagination, changePage, setSearch, updateLimit, setCategory, resetFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
