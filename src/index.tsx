import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from './Theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { AppProvider } from './context/openMenu';
import { CategoryProvider } from './context/searchCategories';
import { SearchProvider } from './context/searchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <AppProvider>
        <CategoryProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </CategoryProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);