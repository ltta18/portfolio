import { Layout, Menu } from 'antd';
import React from 'react';

const {
  Header, Content, Footer, Sider,
} = Layout;

const CommonHeader = () => (
  <Header
    breakpoint="lg"
    // collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
    style={{ position: 'fixed', zIndex: 1, width: '100%' }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">About Me</Menu.Item>
      <Menu.Item key="2">Projects</Menu.Item>
      <Menu.Item key="3">Gallary</Menu.Item>
      <Menu.Item key="4">Contact</Menu.Item>
    </Menu>
  </Header>

  // <Layout>

  //   <Layout>
  //     <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

  //   </Layout>
  //   <Sider
  //     breakpoint="lg"
  //     collapsedWidth="0"
  //     onBreakpoint={(broken) => {
  //       console.log(broken);
  //     }}
  //     onCollapse={(collapsed, type) => {
  //       console.log(collapsed, type);
  //     }}
  //   >
  //     <div className="logo" />
  //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
  //       <Menu.Item key="1">
  //         nav 1
  //       </Menu.Item>
  //       <Menu.Item key="2">
  //         nav 2
  //       </Menu.Item>
  //       <Menu.Item key="3">
  //         nav 3
  //       </Menu.Item>
  //       <Menu.Item key="4">
  //         nav 4
  //       </Menu.Item>
  //     </Menu>
  //   </Sider>
  // </Layout>
);

export default CommonHeader;
