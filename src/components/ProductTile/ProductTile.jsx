import React from 'react';
import { Image } from 'grommet';
import PropTypes from 'prop-types';
import ProductRating from './components/ProductRating';
import ProductPrice from './components/ProductPrice';
import StockStatus from './components/StockStatus';
import * as S from './productTile.style';

function ProductTile({ data }) {
  return (
    <S.ProductTile key={data.id} to={`/product/${data.id}`}>
      <S.Breadcrumbs>
        {`${data.category} `}
        /
        {` ${data.brand}`}
      </S.Breadcrumbs>
      <Image
        fit="cover"
        src={data.thumbnail}
      />
      <span className="title">{data.title}</span>
      <StockStatus count={data.stock} />
      <ProductRating position="center" rating={data.rating} />
      <ProductPrice position="center" price={data.price} discount={data.discountPercentage} />
    </S.ProductTile>
  );
}

export default ProductTile;
ProductTile.propTypes = {
  data: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    discountPercentage: PropTypes.number,
    price: PropTypes.number,
    rating: PropTypes.number,
    stock: PropTypes.number,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
