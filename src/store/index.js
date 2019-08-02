import {applyMiddleware, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import {rootReducer} from "./reducer";


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);


const store = createStore(
    rootReducer,
    enhancer
);

export default store;
