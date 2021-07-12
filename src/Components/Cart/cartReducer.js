import {createSlice} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'cart',
    initialState: {
        productsInfo:{

        },
        totalCount: 0,
        totalCost: 0
    },
    reducers: {
        addProductToCart(state, {payload}){
            const id = payload.id
            if(id in state.productsInfo) {
                const count = state.productsInfo[id].count+=1
                let priceCopy = state.productsInfo[id].starterPrice
                state.productsInfo[id].price = count*priceCopy
            }else{
                payload.price = Number(payload.price.replace(/\s+/g, '').trim())
                state.productsInfo[id] = {...payload, starterPrice: payload.price,count: 1, isAddedToCart: false}
            }
            state.totalCount+=1
            state.totalCost+=state.productsInfo[id].starterPrice
        },
        setIsAddedToCart(state, {payload}){
            if(state.productsInfo[payload.id]){
                state.productsInfo[payload.id].isAddedToCart = payload.isAdded
            }
        }
    }
})
export const cartReducer = slice.reducer
export const {addProductToCart, setIsAddedToCart} = slice.actions

