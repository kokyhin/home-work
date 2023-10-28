import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ProductPrice.style';

function ProductPrice({ price, discount, position }) {
  if (!discount) {
    return (
      <S.PriceBox>
        $
        {price}
      </S.PriceBox>
    );
  }

  return (
    <S.PriceBox position={position}>
      <div className="old-price">
        $
        {price}
      </div>
      <div className="new-price">
        $
        {+(price - ((price * discount) / 100)).toFixed(2)}
      </div>
    </S.PriceBox>
  );
}

export default ProductPrice;
ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  position: PropTypes.oneOf(['flex-start', 'center']),
};
ProductPrice.defaultProps = {
  discount: null,
  position: 'flex-start',
};
