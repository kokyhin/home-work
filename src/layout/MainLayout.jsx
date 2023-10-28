import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from 'grommet';
import * as S from './MainLayout.style';

function MainLayout() {
  return (
    <S.MainContainer>
      <S.Header id="main-header" />
      <Main pad="medium" className="main-content">
        <Outlet />
      </Main>
      <S.Footer id="main-footer" />
    </S.MainContainer>
  );
}

export default MainLayout;
