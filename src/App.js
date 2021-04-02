import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
} from 'antd'

import Home from './pages/home';

import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data.candles)
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <Home />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Karl Heitmann ©2021</Footer>
    </Layout>

  );
}


export default App;
