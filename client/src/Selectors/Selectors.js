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

export const selectIsModalActive = (state) => {
    return state.products.isModalActive
}

export const selectRate = (state, id) => {
    const allProducts = selectAllProduct(state)
    const index = allProducts.findIndex(i => i.id === id)
    return allProducts[index].rating
}

export const selectRateCount = (state, id) => {
    const allProducts = selectAllProduct(state)
    const index = allProducts.findIndex(i => i.id === id)
    return allProducts[index].ratingCount
}

export const selectFavoriteCount = (state) => {
    return state.favoritesProducts.count
}

export const selectIsAddedToFavorites = (state, id) => {
    return state.favoritesProducts.addedFavoritesProducts?.[id] || false
}

export const selectIsProductRated = (state, id) => {
    return state.products.ratedProducts?.[id] || false
}

export const selectUserRatingToProduct = (state, id) => {
    return state.products.userRateToEachProduct?.[id] || 0
}

export const selectFavoritesProducts = (state) => {
    return state.favoritesProducts.favoritesProducts
}