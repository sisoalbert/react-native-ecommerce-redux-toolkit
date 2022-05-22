import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { combineReducers } from "redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["initialState"],
};

// import productsReducer from "./productsSlice";
// import uiReducer from "./uiSlice";

const rootReducer = combineReducers({
  cartReducer: persistReducer(persistConfig, cartReducer),
});

const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: rootReducer,
    // ui: uiReducer
  },
});

const appPersist = persistStore(store);
export { store, appPersist };
