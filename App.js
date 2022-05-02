import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RootNavigator from "./src/navigation/RootNavigator";

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
