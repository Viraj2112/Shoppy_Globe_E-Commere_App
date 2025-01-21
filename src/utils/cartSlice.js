import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            items: [],
        },
        reducers: {
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
            deleteItem: (state, action) => {
                const existingItem = state.items.find(item => item.id === action.payload.id);
                existingItem && state.items.splice(state.items.indexOf(existingItem),1)
            },
            removeItem: (state, action) => {
                const existingItem = state.items.find(item => item.id === action.payload.id);
                existingItem && existingItem.quantity--
            }
        },
    }
);

export const { addItem, deleteItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;