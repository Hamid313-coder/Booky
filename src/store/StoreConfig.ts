import { applyMiddleware, combineReducers, createStore } from "redux";
import { booksReducer } from "./Reducers";
import thunk from "redux-thunk";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const presistConfig = {
  key: "root",
  storage: AsyncStorageLib,
  whiteList: ["bookmarks"],
};

const rootReducer = combineReducers({
  booksReducer: persistReducer(presistConfig, booksReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const presistore = persistStore(store);
