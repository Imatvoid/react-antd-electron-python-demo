import React from 'react';
//import ReactDOM from 'react-dom';
import {Layout, Menu, Icon} from 'antd';
import './App.css';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const process = require('process');
console.log(require);



const electron = require('electron');
console.log(electron);

const zerorpc = window.require("zerorpc");

let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");
client.invoke("echo", "server ready", (error: any, res: any) => {
    if (error || res !== 'server ready') {
        console.error(error)
    } else {
        console.log("server is ready")
    }
});



class App extends React.Component {


    state = {
        collapsed: false,
        nodeVersion: process.versions.node,
        chromeVersion: process.versions.chrome,
        electronVersion: process.versions.electron,
        inputValue: "1 + 2.0 * 3.1 / (4 ^ 5.6)",
        result: 0,
    };


    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({collapsed});
    };
    onCal = (event: any) => {
        console.log(event.target.value);
        client.invoke("calc", event.target.value, (error: any, res: any) => {
            if (error) {
                console.error(error);
            } else {
                this.setState({result: res});
            }
        })
    };

    render() {

        return (
            <Layout>
                <Sider style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
                       collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>

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
                            <Menu.Item key="512">Alex</Menu.Item>
                            <Menu.Item key="513">Alex</Menu.Item>
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
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>

                    </Header>


                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            We are using Node.js {this.state.nodeVersion}
                            ,
                            Chromium {this.state.chromeVersion}
                            ,
                            and Electron{this.state.electronVersion}
                            .
                            <input id="formula" onChange={this.onCal}/>
                            <div id="result">{this.state.result}</div>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );


    };


}


export default App;
