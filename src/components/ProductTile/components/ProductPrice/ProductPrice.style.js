import styled from 'styled-components/macro';

export const PriceBox = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => props.position};

  .old-price {
    text-decoration: line-through;
    font-size: 12px;
    color: '#ddd';
    margin-right: 5px;
  }
`;
