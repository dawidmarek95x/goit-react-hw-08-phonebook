import React, { Suspense } from 'react';
import MainNav from './MainNav/MainNav';
import MainTitle from './MainTitle/MainTitle';
import { Wrapper } from './App.styled';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';

const App = () => {
  return (
    <>
      <Wrapper>
        <MainTitle />
        <MainNav />
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
