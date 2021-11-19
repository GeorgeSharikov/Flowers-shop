import { createSlice } from "@reduxjs/toolkit";
import {apiProducts, SortsMethods as sortsMethods} from '../../api/api.js';


 const initialState = JSON.parse(localStorage.getItem('store'))?.products || {
    allProductList: [],
    isFetching: true,
    chosenProduct: null,
    sortCategories: {
        popularity: 'Popularity',
        priceHighToLow: 'Price: high to low',
        priceLowToHigh: 'Price: low to high',
    },
    currentSortCategory: null,
    stepScroll: 8,
    isModalActive: false,
    ratedProducts: {},
    userRateToEachProduct: {}
}
export const slice = createSlice({
    name: 'products',
    initialState: initialState,
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
            state.allProductList = sortsMethods.sortByPopularity(payload.products)
        },
        setSortByHighPRice(state, {payload}){
            state.currentSortCategory = state.sortCategories.priceHighToLow
            state.allProductList = sortsMethods.priceHighToLow(payload.products)
        },

        setSortByLowPRice(state, {payload}){
            state.currentSortCategory = state.sortCategories.priceLowToHigh
            state.allProductList = sortsMethods.priceLowToHigh(payload.products)
        },

        setStepScroll(state, {payload}){
            if(payload){
                state.stepScroll+=8
            }else{
                state.stepScroll=8
            }
        },
        setModalActive(state, {payload}){
            state.isModalActive = payload
        },
        setRating(state, {payload}){
            const id = payload.id

            const copyState = [...state.allProductList]
            copyState[payload.index].ratingCount +=1
            copyState[payload.index].rating = payload.newRating
            state.allProductList = copyState

            state.ratedProducts[id] = true
            state.userRateToEachProduct[id] = payload.userRating
        },
        deleteRating(state, {payload}){
            const id = payload.id
            const index = payload.index
            const newRating = payload.newRating
            const newRatingCount = payload.newRatingCount

            const copyState = [...state.allProductList]
            copyState[index].rating = newRating
            copyState[index].ratingCount = newRatingCount
            state.allProductList = copyState

            state.ratedProducts[id] = false
            state.userRateToEachProduct[id] = 0
        },
        changeRating(state, {payload}){
            const id = payload.id

            const copyState = [...state.allProductList]
            copyState[payload.index].rating = payload.newRating
            state.allProductList = copyState

            state.userRateToEachProduct[id] = payload.userRating
        }
    }
})
export const productsReducer = slice.reducer
export const {getAllProducts,
    setIsFetching,
    setChosenProduct,
    setSortByLowPRice,
    setSortByHighPRice,
    setStepScroll,
    setSortByPopularity,
    deleteRating,
    setRating,
    changeRating,
    setModalActive} = slice.actions

export const getAllProductsAsync = () => async (dispatch, getState) => {
    const allProductsData = await apiProducts.getAllProducts()
    if(getState().products.allProductList.length===0){
        dispatch(setIsFetching(false))
    }
    dispatch(getAllProducts(allProductsData))
}

export const getChosenProductAsync = (id) => async (dispatch) => {
    const product = await apiProducts.getChosenProduct(id)
    dispatch(setChosenProduct(product))
    dispatch(setModalActive(true))
}

export const setRatingToProductAsync = (id, newRate, rate, rateCount) => async (dispatch, getState) => {
    let newRating = (rate * rateCount + newRate) / (rateCount+1)
    newRating = Number(newRating.toFixed(2))
    await apiProducts.setChosenProduct(id, newRating, rateCount)
    const index = getState().products.allProductList.findIndex(i =>i.id === id)
    dispatch(setRating({index, newRating, id, userRating: newRate}))
}

export const deleteUserRatingToProductAsync = (rating, userRate, ratingCount, id) => async (dispatch, getState) => {
     let newRating = ratingCount>1 ? (rating * ratingCount - userRate) / (ratingCount - 1) : 0
     newRating = Number(newRating.toFixed(2))
     const newRatingCount = ratingCount - 1
     const index = getState().products.allProductList.findIndex(i =>i.id === id)
     await apiProducts.deleteUserRatingToProduct(id, newRating, newRatingCount)
     dispatch(deleteRating({id, newRating, newRatingCount, index}))
}

export const editRatingToProductAsync = (oldUserRate, newRate, id, ratingCount, rating) => async (dispatch, getState) => {
    let newRating = ratingCount>1 ? (rating * ratingCount - oldUserRate) / (ratingCount - 1) : newRate
    newRating = ratingCount>1  ? (newRating + newRate) / ratingCount : newRate
    newRating = Number(newRating.toFixed(2))
    await apiProducts.changeUserRatingToProduct(id, newRating)
    const index = getState().products.allProductList.findIndex(i =>i.id === id)
    dispatch(changeRating({index, newRating, id, userRating: newRate}))
}

