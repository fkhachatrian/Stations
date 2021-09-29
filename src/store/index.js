import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import auth from './reducers/Stations';

const reducers = combineReducers({
     auth
})

export default configureStore({
     reducer: reducers,
     middleware: [thunk],
     devTools: process.env.NODE_ENV !== 'production',
});
