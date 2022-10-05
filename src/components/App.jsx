import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './App.styled';
import MainTitle from './MainTitle/MainTitle';
import Loader from './Loader/Loader';
import MainNav from './MainNav/MainNav';
import { ToastContainer } from 'react-toastify';
import CookieConfirmation from './CookieConfirmation/CookieConfirmation';

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
      <ToastContainer />
      <CookieConfirmation />
    </>
  );
};

export default App;
