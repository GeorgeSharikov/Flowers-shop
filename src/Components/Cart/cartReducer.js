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
                payload.price = typeof payload.price === 'number' ? payload.price : Number(payload.price.replace(/\s+/g, '').trim())
                state.productsInfo[id] = {...payload, starterPrice: payload.price,count: 1, isAddedToCart: false}
            }
            state.totalCount+=1
            state.totalCost+=state.productsInfo[id].starterPrice
        },
        subtractProductCountInCart(state, {payload}){
            const id = payload.id
            if(state.productsInfo[id].count!==1){
                state.productsInfo[id].count-=1
                state.totalCount-=1
                state.totalCost-=state.productsInfo[id].starterPrice
                state.productsInfo[id].price-=state.productsInfo[id].starterPrice
            }
        },
        setIsAddedToCart(state, {payload}){
            if(state.productsInfo[payload.id]){
                state.productsInfo[payload.id].isAddedToCart = payload.isAdded
            }
        },
        deleteProductFromCart(state, {payload}){
            const id = payload.id
            state.totalCost-=state.productsInfo[id].price
            state.totalCount-=state.productsInfo[id].count
            delete state.productsInfo[id]
        },
        emptyCart(state){
            state.totalCount = 0
            state.totalCost = 0
            const keys = Object.keys(state.productsInfo)
            for(let i = 0;i<keys.length; i++){
                let id = keys[i]
                delete state.productsInfo[id]
            }
        }
    }
})
export const cartReducer = slice.reducer
export const {addProductToCart, setIsAddedToCart, subtractProductCountInCart, deleteProductFromCart, emptyCart} = slice.actions

