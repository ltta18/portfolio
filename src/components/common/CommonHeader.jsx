import { Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const CommonHeader = () => (
  <Header
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
    style={{ position: 'fixed', zIndex: 1, width: '100%' }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 2</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
);

export default CommonHeader;
