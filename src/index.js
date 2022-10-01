import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'components/App';
import Contacts from 'pages/Contacts/Contacts';
import 'modern-normalize';
import './index.scss';
import Home from 'pages/Home/Home';
import Registration from 'pages/Registration/Registration';
import Login from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />}/>
            </Route>
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
