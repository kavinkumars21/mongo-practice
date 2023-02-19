import { configureStore, combineReducers } from "@reduxjs/toolkit";

import IdentifierReducer from "./redux/kfcIdentifierSlice";

import KFCReducer from "./redux/kfcSlice";

const rootReducer = combineReducers({
  kfc: KFCReducer,
  kfcIdentifier: IdentifierReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
