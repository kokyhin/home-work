import productsReducer from './products/productsSlice';
import filterReducer from './filter/filterSlice';

const rootReducers = {
  products: productsReducer,
  filter: filterReducer,
};

export default rootReducers;
