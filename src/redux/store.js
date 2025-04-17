// src/redux/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";
import drawerReducer from "./reducers/drawerSlice";

// Persist configuration for auth slice
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"], // Only persist auth
};

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    drawer: drawerReducer,
    cart: cartReducer, // Add cart reducer
});

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Create persistor for the store
export const persistor = persistStore(store);
export default store;
