import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import * as S from './StockStatus.style';

function StockStatus({ count }) {
  const data = useMemo(() => {
    const info = {
      message: 'In stock',
      className: 'normal',
    };

    if (!count) {
      info.message = 'Out of stock';
      info.className = 'empty';
    } else if (count <= 10) {
      info.message = 'Few left';
      info.className = 'low';
    }

    return info;
  }, [count]);

  return (
    <S.StockWrapper className={data.className}>
      {data.message}
    </S.StockWrapper>
  );
}

export default StockStatus;
StockStatus.propTypes = {
  count: PropTypes.number.isRequired,
};
