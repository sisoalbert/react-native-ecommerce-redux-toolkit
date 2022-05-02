import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

//import Header from component folder- this takes props
import Header from "../components/Header";

const Details = ({ navigation: { goBack } }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Header onPress={() => goBack()} />
      <Text>Details</Text>
      <Button onPress={() => goBack()} title="Go back from ProfileScreen" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
