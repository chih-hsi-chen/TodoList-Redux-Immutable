import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";
import Immutable from "immutable";

// base middlewares
const middlewares = [thunkMiddleware];

if(process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
        collapsed: true,
    });
    middlewares.push(logger);
}

const initialState = Immutable.Map({});

// For universal(or say isomorphic) apps, we have to check if current env is server or client.
const composeEnhancers = 
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);
