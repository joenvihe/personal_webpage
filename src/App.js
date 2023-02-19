import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './App.css';

const { Header, Content, Footer } = Layout;

function NavigationBar() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

function App() {
  return (
    <Layout className="layout">
      <NavigationBar />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Hello World</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Personal Webpage ©{new Date().getFullYear()} Created by You
      </Footer>
    </Layout>
  );
}

export default App;

