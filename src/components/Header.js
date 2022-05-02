import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
//import Ionicon
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../redux/selectors";

const Header = (props) => {
  const total = useSelector(cartTotalSelector);
  return (
    <View style={styles.header}>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: 'red',
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={props.onPressMenu}
          >
            {/* <Image
            style={{ width: 35, height: 35, resizeMode: "stretch" }}
            source={require("../../assets/icon.png")}
          /> */}
            <View>
              <Ionicons name={props.headerIcon} size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Fontisto name="shopping-store" size={24} color="black" />
        </View>

        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={props.onPressCart}
        >
          <Ionicons name="cart-outline" size={30} color="black" />
          <View
            style={{
              flexDirection: "column",
              // backgroundColor: "yellow",
              height: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 12 }}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "gray", height: 1 }} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
