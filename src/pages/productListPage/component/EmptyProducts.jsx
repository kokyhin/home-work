import React from 'react';
import { Clipboard } from 'grommet-icons';

import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 600;
  font-size: 30px;
  color: #666;

  svg {
    margin-bottom: 20px;
  }
`;

function EmptyProducts() {
  return (
    <Container>
      <Clipboard size="large" />
      Empty result
    </Container>
  );
}

export default EmptyProducts;
