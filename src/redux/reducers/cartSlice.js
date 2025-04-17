import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // Array to hold cart items
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1,
                    image: action.payload.image // Include image
                });
            }
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        incrementProduct: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementProduct: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
    },
});

export const { addToCart, removeProduct, incrementProduct, decrementProduct } = cartSlice.actions;
export default cartSlice.reducer;
