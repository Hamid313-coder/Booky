import booksReducer from "./booksSlice";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

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
  books: persistReducer(presistConfig, booksReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const presistore = persistStore(store);
