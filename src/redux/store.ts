import { configureStore, AnyAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import localforage from "localforage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

import productsReducer from "./reducers/productsSlice";
import { fakeStoreApi } from "../commons/config/fakeStoreApi";

import cartReducer, { CartState } from "./reducers/cartSlice";
import authReducer, { AuthState } from "./reducers/authSlice";

const cartPersistConfig = {
  key: "cart",
  storage: localforage,
};

const authPersistConfig = {
  key: "auth",
  storage: localforage,
  blacklist: ["user"],
};

export const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    products: productsReducer,
    cart: persistReducer<CartState, AnyAction>(cartPersistConfig, cartReducer),
    auth: persistReducer<AuthState, AnyAction>(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(fakeStoreApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
