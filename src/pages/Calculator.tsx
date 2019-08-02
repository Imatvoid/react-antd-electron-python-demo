import React from "react";
import {connect} from "react-redux";
import {getCalcAction} from "../store/actionCreation";


function Calculator(props: any) {


    return (
        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
            We are using Node.js {props.nodeVersion}.<br/>
            Chromium {props.chromeVersion}.<br/>
            and Electron{props.electronVersion}.<br/>
            <input id="formula" onChange={props.onCal}/>
            <div id="result">{props.result}</div>
        </div>
    );
}


// store => props
function mapStoreToProps(store: any) {
    return {
        nodeVersion: store.env.nodeVersion,
        chromeVersion: store.env.chromeVersion,
        electronVersion: store.env.electronVersion,
        result: store.calculatorResult,
    }
}


// store.dispatch => props  可以直接通过props调用
function mapDispatchToProps(dispatch: any) {
    return {
        onCal(event: any) {
            dispatch(getCalcAction(event.target.value))
        }
    }
}

// TodoList(provider里面) 和store 连接  这样返回一个容器组件
export default connect(mapStoreToProps, mapDispatchToProps)(Calculator);
