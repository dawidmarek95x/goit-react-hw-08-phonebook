import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'components/App';
import NotFound from 'pages/NotFound/NotFound';
import 'modern-normalize';
import './index.scss';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Home = React.lazy(() => import("./pages/Home/Home"));
const PrivateRoute = React.lazy(() => import("./components/PrivateRoute/PrivateRoute"));
const Contacts = React.lazy(() => import("./pages/Contacts/Contacts"));
const Registration = React.lazy(() => import("./pages/Registration/Registration"));
const Login = React.lazy(() => import("./pages/Login/Login"));

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
            <Route element={<PublicRoute />}>
              <Route path="register" element={<Registration />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
