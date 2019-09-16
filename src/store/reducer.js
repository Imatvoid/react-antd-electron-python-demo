import {combineReducers} from "redux";
import {AC_CALC, AC_HANDLE_ORDER_NO_CHANGE, AC_TRANS_ORDER_NO} from "./actionCreation";


const process = require('process');
const envState = {
    nodeVersion: process.versions.node,
    chromeVersion: process.versions.chrome,
    electronVersion: process.versions.electron
};

function env(state = envState, action) {
    return state;
}


function calculatorResult(state = 0, action) {
    if (action.type === AC_CALC) {
        return action.result;
    }
    return state;
}


const orderUtilState = {
    no: "123456789444442",
    dataBaseNo: "3" ,
};
function orderUtil(state = orderUtilState, action) {
    if (action.type === AC_HANDLE_ORDER_NO_CHANGE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.no=action.data;
        return newState;
    }

    if (action.type === AC_TRANS_ORDER_NO) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.dataBaseNo=action.data;
        return newState;
    }
    return state;
}

// 组合成一个 rootReducer
export const rootReducer = combineReducers({
    env,
    calculatorResult,
    orderUtil,
});
