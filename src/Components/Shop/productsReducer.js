import { createSlice } from "@reduxjs/toolkit";
import { apiProducts } from '../../api/api';

export const slice = createSlice({
    name: 'products',
    initialState: {
        allProductList: [],
        isFetching: true
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
        },
        setIsFetching(state, {payload}){
            state.isFetching = payload
        }
    }
})
export const productsReducer = slice.reducer
export const {getAllProducts, setIsFetching} = slice.actions

export const getAllProductsAsync = () => async (dispatch) => {
    const allProductsData = await apiProducts.getAllProducts()
    dispatch(setIsFetching(false))
    dispatch(getAllProducts(allProductsData))
}


