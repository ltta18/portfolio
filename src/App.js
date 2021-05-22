import React from 'react';
import CommonHeader from '@components/common/CommonHeader';
import { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import theme from '@css/theme';
import store from './redux/store';
import './App.css';
import '@css/globalStyles';

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
