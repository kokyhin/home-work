import styled from 'styled-components/macro';

export const StockWrapper = styled.div`
  display: inline-block;

  padding: 2px 4px;
  border-radius: 3px;
  font-size: 12px;
  margin-bottom: 5px;

  &.normal {
    background: #5ec85e;
  }

  &.low {
    background: #fcb143;
  }

  &.empty {
    background: #ddd;
  }
`;
