import { applyMiddleware, combineReducers, createStore } from "redux";
import { booksReducer } from "./Reducers";
import thunk from "redux-thunk";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({ booksReducer });

const presistConfig = {
  key: "root",
  storage: AsyncStorageLib,
  whiteList: ["bookmarks"],
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
