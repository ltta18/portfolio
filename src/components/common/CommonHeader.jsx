import {
  Button, Drawer, Layout, Menu,
} from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appActions, { getView } from '@redux/actions';
import useWindowSize from '@lib/useWindowSize';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const { toggleAll, toggleOpenDrawer } = appActions;

const CommonHeader = () => {
  const { width, height } = useWindowSize();
  const openDrawer = useSelector((state) => state.openDrawer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height]);

  return (
  // <Header
  //   breakpoint="lg"
  // // collapsedWidth="0"
  //   onBreakpoint={(broken) => {
  //     console.log(broken);
  //   }}
  //   onCollapse={(collapsed, type) => {
  //     console.log(collapsed, type);
  //   }}
  //   style={{ position: 'fixed', zIndex: 1, width: '100%' }}
  // >
  //   <div className="logo" />
  //   <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
  //     <Menu.Item key="1">About Me</Menu.Item>
  //     <Menu.Item key="2">Projects</Menu.Item>
  //     <Menu.Item key="3">Gallary</Menu.Item>
  //     <Menu.Item key="4">Contact</Menu.Item>
  //   </Menu>
  // </Header>

    <div>
      <Drawer
        placement="left"
        // closable={false}
        onClose={() => dispatch(toggleOpenDrawer())}
        visible={getView(width) === 'MobileView' && openDrawer}
      >

        <Menu>
          <Menu.Item key="1">About Me</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
          <Menu.Item key="3">Gallary</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>

      </Drawer>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          padding: getView(width) === 'MobileView' ? '0' : '0 10%',
        }}
      >

        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          // selectedKeys={[tab.toString()]}
        >
          {/* { getView(width) === 'MobileView'
            ? this.renderDesktopNavbar()
            : this.renderMobileNavbar() }
          { this.renderUserLinks() } */}
          {getView(width) === 'MobileView'
            ? (
              <Button onClick={() => dispatch(toggleOpenDrawer())}>
                <MenuOutlined />
              </Button>
            )
            : (
              <>
                <Menu.Item key="1">About Me</Menu.Item>
                <Menu.Item key="2">Projects</Menu.Item>
                <Menu.Item key="3">Gallary</Menu.Item>
                <Menu.Item key="4">Contact</Menu.Item>
              </>
            )}

        </Menu>
      </Header>
    </div>
  );
};

export default CommonHeader;
