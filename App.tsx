import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigator from "./src/navigation/RootNavigator";
import { presistore, store } from "./src/store/StoreConfig";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistore}>
        <StatusBar style="light" animated />
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
