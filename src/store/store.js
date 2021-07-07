import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../Components/Shop/productsReducer";

export const store = configureStore({
    reducer: productsReducer
})

window.store = store