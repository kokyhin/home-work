import React from 'react';
import { Spinner } from 'grommet';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FDF4E3;
`;

function Preloader() {
  return (
    <Wrapper>
      <Spinner size="medium" />
    </Wrapper>
  );
}

export default Preloader;
