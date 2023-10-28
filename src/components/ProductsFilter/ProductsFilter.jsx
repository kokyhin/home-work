import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Toolbar, TextInput, Select, Button,
} from 'grommet';
import { searchProduct, getProducts, getProductsCategories } from 'src/store/products/productActions';
import {
  setSearch, updateLimit, resetFilter,
} from 'src/store/filter/filterSlice';
import Portal from 'src/hooks/usePortal';
import { options } from './constants';
import * as S from './ProductsFilter.style';

function ProducrsFilter() {
  const dispatch = useDispatch();
  const {
    pagination,
    search,
  } = useSelector((state) => ({
    pagination: {
      limit: state.filter.limit,
      skip: state.filter.skip,
      total: state.filter.total,
    },
    category: state.filter.category,
    search: state.filter.search,
    categories: state.products.categories,
  }));

  useEffect(() => {
    dispatch(getProductsCategories());
  }, []);

  const handleSearch = useCallback(({ target }) => {
    dispatch(setSearch(target.value));
    dispatch(searchProduct());
  }, []);

  const handleLimitChange = useCallback(({ option }) => {
    dispatch(updateLimit(option));
    dispatch(getProducts());
  }, []);

  const resetFilters = useCallback(() => {
    dispatch(resetFilter());
    dispatch(searchProduct());
  }, []);

  return (
    <Portal to="main-header">
      <S.TopBar>
        <Toolbar>
          <TextInput
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </Toolbar>
        <Select
          options={options}
          value={pagination.limit}
          onChange={handleLimitChange}
        />
        <Button onClick={resetFilters} primary label="Reset" />
      </S.TopBar>
    </Portal>
  );
}

export default ProducrsFilter;
