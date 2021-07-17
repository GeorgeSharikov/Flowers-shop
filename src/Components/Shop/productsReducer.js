import { createSlice } from "@reduxjs/toolkit";
import {apiProducts, SortsMethods as sortsMethods} from '../../api/api';

export const slice = createSlice({
    name: 'products',
    initialState: {
        allProductList: [],
        isFetching: true,
        chosenProduct: null,
        sortCategories: {
            popularity: 'Popularity',
            priceLowToHigh: 'Price: low to high',
            priceHighToLow: 'Price: high to low'
        },
        currentSortCategory: null
    },
    reducers: {
        //change params structure from string to object
        getAllProducts(state, {payload}){
            let copyPayloadParams = payload.map(el => {
                let element = el.params.split(/\n/)
                element.pop()
                return element
            })
            for(let i = 0; i<copyPayloadParams.length;i++){
                payload[i].params = {
                    diameter: copyPayloadParams[i][0],
                    height: copyPayloadParams[i][1],
                    weight: copyPayloadParams[i][2],
                }
            }
            state.allProductList = payload
            if(!state.currentSortCategory){
                state.currentSortCategory = state.sortCategories.popularity
            }
            debugger
        },

        setIsFetching(state, {payload}){
            state.isFetching = payload
        },

        setChosenProduct(state, {payload}){
            let element = payload.params.split(/\n/)
            element.pop()
            for(let i = 0; i<element.length;i++){
                payload.params = {
                    diameter: element[0],
                    height: element[1],
                    weight: element[2],
                }
            }
            state.chosenProduct = payload
        },

        setSortByPopularity(state, {payload}){
            state.currentSortCategory = state.sortCategories.popularity
            state.allProductList = sortsMethods.popularitySort(payload.products)
        },

        setSortByLowPRice(state, {payload}){
            state.currentSortCategory = state.sortCategories.priceLowToHigh
            state.allProductList = sortsMethods.priceLowToHigh(payload.products)
        },

        setSortByHighPRice(state, {payload}){
            state.currentSortCategory = state.sortCategories.priceHighToLow
            state.allProductList = sortsMethods.priceHighToLow(payload.products)
        },
    }
})
export const productsReducer = slice.reducer
export const {getAllProducts, setIsFetching, setChosenProduct, setSortByPopularity, setSortByLowPRice, setSortByHighPRice} = slice.actions

export const getAllProductsAsync = () => async (dispatch) => {
    const allProductsData = await apiProducts.getAllProducts()
    dispatch(setIsFetching(false))
    dispatch(getAllProducts(allProductsData))
}

export const getChosenProductAsync = (id) => async (dispatch) => {
    const product = await apiProducts.getChosenProduct(id)
    dispatch(setChosenProduct(product))
}


