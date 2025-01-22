import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Below here created an appStore using reduxjs.
const appStore = configureStore({
    reducer: {
        // Adding the cartReducer to the app Store Reducer
        cart: cartReducer,
    }
});

export default appStore;