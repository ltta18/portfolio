import React from 'react';
import './App.css';
import '@css/globalStyles';
import CommonHeader from '@components/common/CommonHeader';
import { ThemeProvider } from 'styled-components';
import theme from '@css/theme';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout className="App">
          <CommonHeader />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
