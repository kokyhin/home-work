import React, { useMemo } from 'react';
import { Star, StarHalf, StarOutline } from 'grommet-icons';
import PropTypes from 'prop-types';
import * as S from './ProductRating.style';

function ProductRating({ rating, position }) {
  const fullStars = [...Array(Math.floor(rating)).keys()];

  const lastStar = useMemo(() => {
    const stars = [];
    const diff = 5 - fullStars.length;
    if (fullStars.length < rating) {
      stars.push(<StarHalf color="#FFC95E" key="half" />);
      if (diff - 1) {
        [...Array(Math.floor(diff - 1)).keys()].forEach((key) => {
          stars.push(<StarOutline className="outline" key={key} />);
        });
      }
    }

    return stars;
  }, [rating, fullStars]);

  return (
    <S.Rating position={position}>
      {fullStars.map((star) => <Star key={star} color="#FFC95E" />)}
      {lastStar.map((star) => (star))}
    </S.Rating>
  );
}

export default ProductRating;
ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  position: PropTypes.oneOf(['flex-start', 'center']),
};
ProductRating.defaultProps = {
  position: 'flex-start',
};
