import {createSlice} from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('store'))?.favoritesProducts || {
    count: null,
    favoritesProducts: []
}

export const slice = createSlice({
    name: 'favorites.jsx',
    initialState: initialState,
    reducers: {
        addProductToFavorites(state, {payload}){
            console.log('ssss')
            state.count+=1
            state.favoritesProducts.push(payload)
        },
        deleteProductFromFavorites(state, {payload}){
            state.count-=1
            state.favoritesProducts = state.favoritesProducts.filter(i =>  i.id !== payload.id)
        }
    }
})

export const favoritesReducer = slice.reducer

export const {addProductToFavorites, deleteProductFromFavorites} = slice.actions