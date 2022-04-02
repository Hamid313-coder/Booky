import { applyMiddleware, combineReducers, createStore } from "redux";
import { booksReducer } from "./Reducers";
import thunk from "redux-thunk";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

//In this root reducer just the book marks are saved
//So we know from this result that there are some data (except the ones which are fetched from the server), that needs
//to be saved in order to achive them  after reopening the app
//like book marks 😄

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
