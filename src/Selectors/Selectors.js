export const selectAllProduct = (state) => {
    return state.reducer.allProductList
}

export const selectIsFetching = (state) => {
    return state.reducer.isFetching
}