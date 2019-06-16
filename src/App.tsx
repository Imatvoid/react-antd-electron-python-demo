import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Icon} from 'antd';
import './App.css';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;


class App extends React.Component {

    state = {
        collapsed: false,
    };


    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    style={{
                        //overflow: 'auto',
                        //height: '100vh',
                        //position: 'fixed',
                        //left: 0,
                    }}
                    trigger={null} collapsible collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">nav 3</span>
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
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.onCollapse}
                        />
                    </Header>


                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            ...
                            <br/>
                            Really
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            long
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            content
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );


    };


}


export default App;
