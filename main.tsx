// `主进程`入口
const electron = require('electron');
// 获取平台：https://nodejs.org/api/os.html#os_os_platform
const platform = require('os').platform();
// 控制app生命周期.
const app = electron.app;
// 浏览器窗口.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

/*************************************************************
 * 生命周期函数
 *************************************************************/

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;

function createWindow() {
    // 创建一个浏览器窗口.
    mainWindow = new BrowserWindow({
        width: 800, height: 600, webPreferences: {
            webSecurity: true, // 这样可以在 webview 中加载/显示本地计算机的图片。
            nodeIntegration: true
        }
    });

    // 这里要注意一下，这里是让浏览器窗口加载网页。
    // 如果是开发环境，则url为http://localhost:3000（package.json中配置）
    // 如果是生产环境，则url为build/index.html
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    // 加载网页之后，会创建`渲染进程`
    mainWindow.loadURL(startUrl);

    // 打开chrome浏览器开发者工具.
    if (startUrl.startsWith('http')) {
        mainWindow.webContents.openDevTools();

        // // 加载 react/redux 调试工具（如果有需要的话）
        // if('darwin' === platform)
        // {
        //     BrowserWindow.addDevToolsExtension('/Users/issuser/Library/Application\ Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.1.0_0');
        //     BrowserWindow.addDevToolsExtension('/Users/issuser/Library/Application\ Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.2_0');
        // }
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

// // 这是一个示例，展示了`渲染进程`发送了`chooseFolder `事件后，`主进程`打开选择目录的对话框。
// electron.ipcMain.on('chooseFolder', function(){
//     const dialog = electron.dialog;
//     dialog.showOpenDialog(mainWindow, {
//         properties: ['openDirectory']
//     });
// });


/*************************************************************
 * py process
 *************************************************************/


const PY_DIST_FOLDER = 'pycalcdist';
const PY_FOLDER = 'py';
// without .py suffix
const PY_MODULE = 'api';
const PY_PORT = 4242;

let pyProc = null;
let pyPort = PY_PORT;

const createPyProc = () => {
    let script = getScriptPath()
    console.log(script);
    let port = '' + PY_PORT;

    if (guessPackaged()) {
        console.log('packed');
        pyProc = require('child_process').execFile(script, [port])
    } else {
        console.log('no pack');
        //pyProc = require('child_process').spawn('/Users/yangxu/.conda/envs/py36/bin/python', [script, port])
        pyProc = require('child_process').spawn('/home/atvoid/SoftWare/anaconda3/envs/py37/bin/python', [script, port])
    }

    if (pyProc != null) {
        console.log('child process success on port ' + port)
        pyProc.stderr.on('data', function (data) {
            console.log(data.toString());
        });
    }

};

const exitPyProc = () => {
    pyProc.kill();
    pyProc = null;
    pyPort = null;
    console.log('child process kill on port ' + pyPort);

};

/**
 * 是否是打包模式
 */
const guessPackaged = () => {
    const fullPath = path.join(__dirname, PY_DIST_FOLDER);
    return require('fs').existsSync(fullPath)
};
/**
 * 在打包和非打包情况下,获得py文件路径
 */
const getScriptPath = () => {
    if (!guessPackaged()) {
        return path.join(__dirname, PY_FOLDER, PY_MODULE + '.py')
    }
    if (process.platform === 'win32') {
        return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE + '.exe')
    }
    return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE)
};
app.on('ready', createPyProc);
app.on('will-quit', exitPyProc);


