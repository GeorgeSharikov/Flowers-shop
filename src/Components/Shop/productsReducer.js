import { createSlice } from "@reduxjs/toolkit";
import { apiProducts } from '../../api/api';

export const productsReducer = createSlice({
    name: 'products',
    initialState: {
        allProductList: [],
        isFetching: true
    },
    reducers: {
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
            console.log(payload)
            state.allProductList = payload
        },
        setIsFetching(state, {payload}){
            state.isFetching = payload
        }
    }
})
export const {getAllProducts, setIsFetching} = productsReducer.actions

export const getAllProductsAsync = () => async (dispatch) => {
    const allProductsData = await apiProducts.getAllProducts()
    dispatch(setIsFetching(false))
    dispatch(getAllProducts(allProductsData))
}


