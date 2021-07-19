export const selectAllProduct = (state) => {
    return state.products.allProductList
}

export const selectIsFetching = (state) => {
    return state.products.isFetching
}

export const selectProductsInfoToCart = (state) => {
    return state.cart.productsInfo
}

export const selectTotalToCart = (state) => {
    return state.cart.totalCount
}

export const selectTotalCost = (state) => {
    return state.cart.totalCost
}

export const selectIsAddedToCart = (state, id) => {
    if(state.cart.productsInfo[id]){
        return state.cart.productsInfo[id]
    }else{
        return false
    }
}

export const selectChosenProduct = (state) => {
    return state.products.chosenProduct
}

export const selectCurrentCategory = (state) => {
    return state.products.currentSortCategory
}

export const selectStepScroll = (state) => {
    return state.products.stepScroll
}
