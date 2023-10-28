import styled from 'styled-components/macro';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin-bottom: 20px;
  @media (max-width: 1850px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductTile = styled.div`
  border-color: #efeee2;
  padding: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
