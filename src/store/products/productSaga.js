import {
  put, takeLatest, debounce, select,
} from 'redux-saga/effects';
import axios from 'src/utils/axios';
import { GET_PRODUCTS, SEARCH, GET_PRODUCTS_CATEGORIES } from './types';
import { setProducts, setLoading, setCategories } from './productsSlice';
import { setPagination } from '../filter/filterSlice';

const getData = (state) => state.filter;

function* searchRequest() {
  const { search, limit, skip } = yield select(getData);
  yield put(setLoading(true));
  const { data: { products, total } } = yield axios.get(`/products/search?q=${search}&skip=${skip}&limit=${limit}`);
  yield put(setProducts(products));
  yield put(setPagination({ skip, total, limit }));
  yield put(setLoading(false));
}

function* getProducts() {
  try {
    yield searchRequest();
  } catch (error) {
    yield put(setLoading(false));
  }
}

function* getSearch() {
  try {
    yield searchRequest();
  } catch (error) {
    yield put(setLoading(false));
  }
}

function* getProductsCategories() {
  const { data } = yield axios.get('/products/categories');
  yield put(setCategories(data));
}

export function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}

export function* watchGetProductsCategories() {
  yield takeLatest(GET_PRODUCTS_CATEGORIES, getProductsCategories);
}

export function* watchSearch() {
  yield debounce(500, SEARCH, getSearch);
}
