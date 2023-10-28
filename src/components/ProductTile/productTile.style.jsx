import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin-bottom: 20px;
  height: calc(100vh - 200px);
  overflow: auto;
`;

export const ProductTile = styled(NavLink)`
  background: #efeee2;
  color: #000;
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  .title {
    text-align: center;
    margin: 10px 0;
    display: block;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;

export const Breadcrumbs = styled.span`
  font-size: 10px;
  display: block;
  margin-bottom: 10px;
  font-style: italic;
`;
