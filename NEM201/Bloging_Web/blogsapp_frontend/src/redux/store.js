import { legacy_createStore, applyMiddleware, combineReducers, compose, } from 'redux'
import { UserBlogDatareducer } from "./app/content.reducer"
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    UserBlogDatareducer
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);