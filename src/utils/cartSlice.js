import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            items: [],
        },
        reducers: {
            addItem: (state, action) => {
                const existingItem = state.items.find(item => item.id === action.payload.id);
                existingItem ? existingItem.quantity += 1 : state.items.push({...action.payload, quantity: 1})
            },
        },
    }
);

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;