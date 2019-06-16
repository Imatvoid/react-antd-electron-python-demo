import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
// import Electron from 'electron';
// const { dialog } = Electron.remote;
//
// //渲染进程可以通过`ipcRenderer`向主进程发送消息。
// // const fs = Electron.remote.require('fs');
// const ipcRenderer  = Electron.ipcRenderer;

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>123</h1>
                <Button type="primary" onClick={this.showNativeDialog}>Button</Button>
            </div>
        );
    }
    //  onClick={this.showNativeDialog}
    showNativeDialog() {
        // 选择文件示例
        // const dialog = electron.remote.dialog;
        // dialog.showOpenDialog({
        //     properties: ['openDirectory']
        // }, (filePaths)=>{
        //     console.log(filePaths);
        // });
        console.log(123);
        //ipcRenderer.send('chooseFolder');
    }
}

export default App;
