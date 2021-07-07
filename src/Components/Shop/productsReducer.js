import { createSlice } from "@reduxjs/toolkit";
import { apiProducts } from '../../api/api';

export const productsReducer = createSlice({
    name: 'products',
    initialState: {
        allProductList: []
    },
    reducers: {
        getAllProducts(state, {payload}){
            state.allProductList = payload
        }
    }
})
export const {getAllProducts} = productsReducer.actions

export const getAllProductsAsync = () => async (dispatch) => {
    const allProductsData = await apiProducts.getAllProducts()
    dispatch(getAllProducts(allProductsData))
}


