import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Screen imports
import Homescreen from "../screens/Homescreen";
import Details from "../screens/Details";
import Privacy from "../screens/Privacy";
import CartScreen from "../screens/CartScreen";
//Navigation imports
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Header" component={Header} /> */}
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

// Draw Comps
const Drawer = createDrawerNavigator();

const Mydrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Lists" component={MyStack} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Privacy Policy" component={Privacy} />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Mydrawer />
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
