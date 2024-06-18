import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import { SignUp } from './pages/SingUp';
import { SignIn } from './pages/SingIn';
import { Home } from './pages/Home';
import { Dish } from './pages/Dish';
import { AddDish } from './pages/AddDish';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles/>
        <AddDish/>
    </ThemeProvider>
  </React.StrictMode>
)
