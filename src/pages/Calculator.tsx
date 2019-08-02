import React, {useState} from "react";
import rpcClient from "../rpc/rpcClient";


export default function Calculator(props: any) {

    const [client] = useState(rpcClient);
    const [result, setResult] = useState(0);


    function onCal(event: any) {
        //console.log(event.target.value);
        client.invoke("calc", event.target.value, (error: any, res: any) => {
            if (error) {
                console.error(error);
            } else {
                setResult(res);
            }
        });
    }


    return (
        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
            We are using Node.js {props.location.state.nodeVersion}.<br/>
            Chromium {props.location.state.chromeVersion}.<br/>
            and Electron{props.location.state.electronVersion}.<br/>
            <input id="formula" onChange={onCal} />
            <div id="result">{result}</div>
        </div>
    );
}
