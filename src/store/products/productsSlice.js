import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    categories: [],
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.data = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCategories: (state, { payload }) => {
      state.categories = ['All categories', ...payload];
    },
  },
});

export const {
  setProducts, setLoading, setCategories,
} = productsSlice.actions;

export default productsSlice.reducer;
