import React from 'react';
import {Icon, Layout, Menu} from 'antd';
import './App.css';
import Calculator from "./pages/Calculator";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const process = require('process');
console.log(process);


// const electron = require('electron');
// console.log(electron);


function calculatorData() {
    console.log("calculatorData");
    return ({
        nodeVersion: process.versions.node,
        chromeVersion: process.versions.chrome,
        electronVersion: process.versions.electron
    });
}

function App() {
    return (
        <Router>
            <Layout>
                <Sider style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                  <Icon type="user"/>
                                  <span>User</span>
                                </span>
                            }
                        >
                            <Menu.Item key="111">Tom</Menu.Item>
                            <Menu.Item key="411">Bill</Menu.Item>
                            <Menu.Item key="511">Alex</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="user"/>
                            <span className="nav-text">Home</span>
                            <Link to="/"/>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">Calculator</span>
                            <Link to={{pathname: '/calculator',state: calculatorData()}}/>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="cloud-o"/>
                            <span className="nav-text">nav 5</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="appstore-o"/>
                            <span className="nav-text">nav 6</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="team"/>
                            <span className="nav-text">nav 7</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="shop"/>
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>
                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/calculator" component={Calculator}/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Router>
    );

}


export default App;
