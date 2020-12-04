import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import {
  Navigate, Route, Routes
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
// import routes from 'src/routes';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import LoginView from 'src/views/auth/LoginView';
import Home from './views/home/Home';

const App = () => {
  // const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="user" element={<DashboardLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/auth" element={<MainLayout />}>
          <Route path="login" element={<LoginView />} />
        </Route>
        <Navigate to="/user/home" />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
