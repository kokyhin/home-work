import { all, fork } from 'redux-saga/effects';
import { watchGetProducts, watchSearch, watchGetProductsCategories } from './products/productSaga';

function* rootSaga() {
  yield all([
    fork(watchGetProducts),
    fork(watchSearch),
    fork(watchGetProductsCategories),
  ]);
}

export default rootSaga;
