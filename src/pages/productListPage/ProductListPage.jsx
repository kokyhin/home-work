import React, { useCallback, useEffect } from 'react';
import { Pagination, Box } from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import useTitle from 'src/hooks/useTitle';
import { changePage } from 'src/store/filter/filterSlice';
import ProductTile from 'src/components/ProductTile';
import Preloader from 'src/components/Preloader';
import ProducrsFilter from 'src/components/ProductsFilter';
import { getProducts } from 'src/store/products/productActions';
import Portal from 'src/hooks/usePortal';
import EmptyProducts from './component/EmptyProducts';
import * as S from './productList.style';

function ProductListPage() {
  useTitle('Products page');
  const dispatch = useDispatch();

  const {
    total, limit, loading, data,
  } = useSelector((state) => ({
    total: state.filter.total,
    limit: state.filter.limit,
    loading: state.products.loading,
    data: state.products.data,
  }));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onPaginationChange = useCallback(({ page }) => {
    dispatch(changePage((page - 1) * limit));
    dispatch(getProducts());
  }, [limit]);

  return (
    <>
      {loading && <Preloader />}
      <ProducrsFilter />
      <S.ProductsContainer>
        {data.map((product) => (
          <ProductTile data={product} key={product.id} />
        ))}
      </S.ProductsContainer>
      {!data.length && <EmptyProducts />}
      <Portal to="main-footer">
        <Box pad="small" align="center">
          <Pagination
            numberItems={total}
            step={limit}
            onChange={onPaginationChange}
          />
        </Box>
      </Portal>
    </>
  );
}

export default ProductListPage;
