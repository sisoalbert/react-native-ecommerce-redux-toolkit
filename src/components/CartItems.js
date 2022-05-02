import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
//import useSelector from react redux
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
// import {
//   removeItem,
//   increase,
//   decrease,
// } from "../redux/features/cart/cartSlice";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <View key={id} style={styles.cartItem}>
      <Image source={{ uri: img }} style={styles.cartItemImg} />
      <View style={{ backgroundColor: "white" }}>
        <Text style={styles.cartItemTitle}>{title}</Text>
        <Text style={styles.cartItemPrice}>${price}</Text>
        <View style={styles.cartItemAmount}>
          <TouchableOpacity
            onPress={() => {
              if (amount === 1) {
                // dispatch(removeItem({ id }));
                return;
              }
              // dispatch(decrease({ id }));
            }}
          >
            <Ionicons name="md-remove" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.cartItemAmountText}>{amount}</Text>
          <TouchableOpacity
            onPress={() => {
              // dispatch(increase({ id }));
            }}
          >
            <Ionicons name="md-add" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.cartItemRemove}>
          <TouchableOpacity
            onPress={() => {
              // dispatch(removeItem(id));
            }}
            style={styles.cartItemRemoveButton}
          >
            <Ionicons name="md-trash" size={15} color="black" />
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  cartItem: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  cartItemImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  cartItemTitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  cartItemPrice: {
    fontSize: 14,
    color: "coral",
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
