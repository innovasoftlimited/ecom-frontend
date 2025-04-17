// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    expiresAt: null, // Stores expiration timestamp

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Called when login process starts
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        // Called on successful login
        loginSuccess(state, action) {
            const { token, user } = action.payload;
            const expiresIn = action.meta || 3600; // Default to 1 hour if not provided
            state.loading = false;
            state.token = token;
            state.user = user;
            state.isAuthenticated = true;
            state.error = null;
            state.expiresAt = Date.now() + expiresIn * 1000; // Store expiry time
        },
        // Called if login fails
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        // Logout action
        logout(state) {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            state.expiresAt = null;

        },
        // Optionally, you can add an action to update user info
        updateUser(state, action) {
            state.user = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } =
    authSlice.actions;

export default authSlice.reducer;
