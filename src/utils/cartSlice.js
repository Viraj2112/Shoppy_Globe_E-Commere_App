import { createSlice } from "@reduxjs/toolkit";

// Below cartSlice is created using reduxjs
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            // Initial state of cart Items which is empty
            items: [],
        },
        reducers: {
            // addItem Function to add Items to the cart
            addItem: (state, action) => {
                const existingItem = state.items.find(item => item.id === action.payload.id);
                if (existingItem) {
                    // Update quantity but cap it at 10
                    existingItem.quantity = Math.min(action.payload.quantity, 10);
                } else {
                    // Add new item to cart with quantity, ensuring it's within the limit
                    state.items.push({ ...action.payload, quantity: Math.min(action.payload.quantity, 10) });
                }
            },
            // deleteItem Function to Delete Items from the Cart
            deleteItem: (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            },
            // removeItem Function is to decrease the Item from the cart
            removeItem: (state, action) => {
                const existingItem = state.items.find(item => item.id === action.payload.id);
                (existingItem && existingItem.quantity>1) && existingItem.quantity--
            },
        },
    }
);

// Exporting Actions and Reducer of the Cart Seperately.
export const { addItem, deleteItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;