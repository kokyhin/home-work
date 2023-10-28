import { GET_PRODUCTS, SEARCH, GET_PRODUCTS_CATEGORIES } from './types';

export function getProducts() {
  return {
    type: GET_PRODUCTS,
  };
}

export function searchProduct() {
  return {
    type: SEARCH,
  };
}

export function getProductsCategories() {
  return {
    type: GET_PRODUCTS_CATEGORIES,
  };
}
