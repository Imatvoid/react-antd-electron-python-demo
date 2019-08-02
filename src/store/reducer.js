import {combineReducers} from "redux";
import {AC_CALC} from "./actionCreation";


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


// 组合成一个 rootReducer
export const rootReducer = combineReducers({
    env,
    calculatorResult
});
