import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/RootNavigator";
import { store } from "./src/store/StoreConfig";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" animated />
      <RootNavigator />
    </Provider>
  );
}
