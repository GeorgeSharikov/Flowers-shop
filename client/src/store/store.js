import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../Components/Shop/productsReducer.js";
import {cartReducer} from "../Components/Cart/cartReducer.js";
import {favoritesReducer} from "../Components/Overheader/favoritesReducer.jsx";
// import {deleteCookie} from "../Utils/cookie";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        favoritesProducts: favoritesReducer
    },
})

window.store = store

store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()))
})

// deleteCookie('store')
// deleteCookie('12')



