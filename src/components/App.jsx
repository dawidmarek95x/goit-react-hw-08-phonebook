import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './App.styled';
import MainTitle from './MainTitle/MainTitle';
import UserMenu from './UserMenu/UserMenu';
import Loader from './Loader/Loader';

const App = () => {
  return (
    <>
      <Wrapper>
        <MainTitle />
        <UserMenu />
      </Wrapper>
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

export default App;
