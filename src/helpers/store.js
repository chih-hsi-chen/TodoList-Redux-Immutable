import { createStore, compose } from "redux";
import rootReducer from "../reducers/index";

export default createStore(
    rootReducer,
    {},
    compose(
        // add redux devTool middleware
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
