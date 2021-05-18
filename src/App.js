import React from 'react';
import './App.css';
import '@css/globalStyles';
import CommonHeader from '@components/common/CommonHeader';
import { ThemeProvider } from 'styled-components';
import theme from '@css/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CommonHeader />
      </div>
    </ThemeProvider>
  );
}

export default App;
