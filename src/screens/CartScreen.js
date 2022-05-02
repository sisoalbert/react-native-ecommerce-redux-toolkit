import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../redux/selectors";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

//import Header from component folder- this takes props
import Header from "../components/Header";
import Data from "../../assets/cartItems";
import { Ionicons } from "@expo/vector-icons";

const amount = 0;

// import CartContainer from "../components/CartContainer";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };

  const renderStoreItems = ({ item }) => {
    return (
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image style={styles.storeItemImage} source={{ uri: item.image }} />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.title}</Text>
          <Text style={styles.storeItemPrice}>
            R{item.quantity * item.price}
          </Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}
              >
                <Ionicons name="md-remove" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}
              >
                <Ionicons name="md-add" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}
              >
                <Ionicons name="md-trash" size={15} color="black" />
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.storeItemTitle}>My Cart</Text>
            <TouchableOpacity onPress={AlertItem}>
              <Text style={styles.storeItemPrice}>Clear cart</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.cartFooter}>
              <View style={styles.checkout}>
                {cart.length === 0 ? (
                  <Text style={styles.checkoutText}>Your cart is empty</Text>
                ) : (
                  <View style={styles.checkoutFull}>
                    <Text style={styles.checkoutText}>
                      Total: R{totalPrice}
                    </Text>

                    <Button
                      title="Checkout"
                      color="#ff5a5f"
                      onPress={() => {
                        // dispatch(checkout());
                      }}
                    />
                    <Button
                      onPress={() => goBack()}
                      title="Continue Shopping"
                    />
                  </View>
                )}
              </View>
              <View style={{ height: 200 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

const CartScreen = ({ navigation: { goBack } }) => {
  return (
    <SafeAreaView>
      <Header headerIcon="ios-chevron-back" onPressMenu={() => goBack()} />
      <CartContainer />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
  },
  storeItemImg: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
  addToCart: {
    backgroundColor: "coral",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
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
  cartFooter: {
    justifyContent: "space-between",
  },
});
