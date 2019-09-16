import React from 'react';
import {Icon, Layout, Menu} from 'antd';
import './App.css';
import Calculator from "./pages/Calculator";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import orderUtils from "./pages/order/orderUtils";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

// const electron = require('electron');
// console.log(electron);

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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">综合面板</span>
                            <Link to={{pathname: '/'}}/>
                        </Menu.Item>
                        <SubMenu
                            key="order"
                            title={
                                <span>
                                  <Icon type="user"/>
                                  <span>订单相关</span>
                                </span>
                            }
                        >
                            <Menu.Item key="orderUtils">
                                <span className="nav-text">常用工具</span>
                                <Link to={{pathname: '/orderUtils'}}/>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="upload"/>
                            <span className="nav-text">Calculator</span>
                            <Link to={{pathname: '/calculator'}}/>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user"/>
                            <span className="nav-text">MQ重置</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">RPC任务重试</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="cloud-o"/>
                            <span className="nav-text">上线快照监控</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="cloud-o"/>
                            <span className="nav-text">其他功能</span>
                        </Menu.Item>
                        {/*<Menu.Item key="6">*/}
                        {/*    <Icon type="appstore-o"/>*/}
                        {/*    <span className="nav-text">nav 6</span>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="7">*/}
                        {/*    <Icon type="team"/>*/}
                        {/*    <span className="nav-text">nav 7</span>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="8">*/}
                        {/*    <Icon type="shop"/>*/}
                        {/*    <span className="nav-text">nav 8</span>*/}
                        {/*</Menu.Item>*/}
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>
                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/calculator" component={Calculator}/>
                        <Route exact path="/orderUtils" component={orderUtils}/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Router>
    );

}


export default App;
