import React from 'react';
import styled from 'styled-components/macro';
import img from 'src/assets/404.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function NotFoundPage() {
  return (
    <Container>
      <img src={img} alt="img" />
    </Container>
  );
}

export default NotFoundPage;
