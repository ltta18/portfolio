import React from 'react';
import CommonHeader from '@components/common/CommonHeader';
import { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import theme from '@css/theme';
import { Content } from 'antd/lib/layout/layout';
import './App.css';
import GlobalStyles from '@css/globalStyles';
import HomePage from '@pages/HomePage';
import store from '@redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout className="App">
          <CommonHeader />
          <Content>
            <HomePage />
          </Content>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
