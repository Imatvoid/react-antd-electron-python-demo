
// const process = require('process');
// console.log(require);
//
//
// const electron = require('electron');
// console.log(electron);

const zeroRpc = window.require("zerorpc");
let rpcClient = new zeroRpc.Client();
rpcClient.connect("tcp://127.0.0.1:4242");
rpcClient.invoke("echo", "server ready", (error: any, res: any) => {
    if (error || res !== 'server ready') {
        console.error(error)
    } else {
        console.log("server is ready")
    }
});

export default rpcClient;
