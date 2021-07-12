import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../Components/Shop/productsReducer";
import {cartReducer} from "../Components/Cart/cartReducer";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
})

window.store = store