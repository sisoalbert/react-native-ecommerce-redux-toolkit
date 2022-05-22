import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RootNavigator from "./src/navigation/RootNavigator";
import { PersistGate } from "redux-persist/integration/react";

//Redux
import { Provider } from "react-redux";
import { store, appPersist } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
