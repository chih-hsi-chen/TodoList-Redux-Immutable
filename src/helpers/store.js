import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";

// base middlewares
const middlewares = [thunkMiddleware];

if(process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
        collapsed: true,
    });
    middlewares.push(logger);
}

// For universal(or say isomorphic) apps, we have to check if current env is server or client.
const composeEnhancers = 
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
    rootReducer,
    {},
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);
