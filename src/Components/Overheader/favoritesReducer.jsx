import {createSlice} from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('store'))?.favoritesProducts || {
    count: null,
    favoritesProducts: [],
    addedFavoritesProducts: {}
}

export const slice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addProductToFavorites(state, {payload}){
            const id = payload.id
            state.count+=1
            state.favoritesProducts.push(payload.product)
            state.addedFavoritesProducts[id] = true
        },
        deleteProductFromFavorites(state, {payload}){
            const id = payload.id
            debugger
            state.count-=1
            state.favoritesProducts = state.favoritesProducts.filter(i => i.id !== id)
            state.addedFavoritesProducts[id] = false
            console.log(state.favoritesProducts)
        },
    }
})

export const favoritesReducer = slice.reducer

export const {addProductToFavorites, deleteProductFromFavorites} = slice.actions