import {database} from '../Firebase.js'

export const apiProducts = {
    getAllProducts: async () => {
        try{
            const productsList = await database.ref('products')
            const productsListData =  await productsList.get()
            console.log('getAllProducts', typeof productsListData.val())
            return productsListData.val()
        }catch(err) {
            console.log(err)
        }
    },
    getChosenProduct: async (id) => {
        try{
            const product = await database.ref(`products/${id-1}`)
            const productData = await product.get()
            console.log('getChosenProduct', typeof productData.val())
            return productData.val()
        }catch(err) {
            console.log(err)
        }
    },
    setChosenProduct: async (id, rate, rateCount) => {
        try{
            const product = await database.ref(`products/${id-1}`)
            let ratingCount = rateCount + 1
            product.update({
                'ratingCount': ratingCount,
                'rating': rate
            })
        }catch (err) {
            console.log(err)
        }
    },
    deleteUserRatingToProduct: async (id, newRate, newRatingCount) => {
        try{
            const product = await database.ref(`products/${id-1}`)
            product.update({
                'rating': newRate,
                'ratingCount': newRatingCount
            })
        }catch(err){
            console.log(err)
        }
    },
    changeUserRatingToProduct: async (id, rate) => {
        try{
            const product = await database.ref(`products/${id-1}`)
            product.update({
                'rating': rate
            })
        }catch (err) {
            console.log(err)
        }
    }
}
export const SortsMethods = {
    priceHighToLow(products){
        let productCopy = products.map((i, index) => {
            const newPrice = typeof i.price === 'string' ? Number(i.price.split('').filter(i => i!==' ').join('')) : i.price
            return {...i, price: newPrice}
        })
       return productCopy.sort((a,b) =>  {
            return a.price - b.price
        }).reverse()
    },
    priceLowToHigh(products){
        let productCopy = products.map((i) => {
            const newPrice = typeof i.price === 'string' ? Number(i.price.split('').filter(i => i!==' ').join('')) : i.price
            return {...i, price: newPrice}
        })
       return  productCopy.sort((a,b) => {
            return a.price - b.price
        })
    },
    sortByPopularity(products){
       if(products){
           const productCopy = [...products]
           let newCopy = productCopy.sort((a,b) => {
               return b.rating - a.rating
           })
           return newCopy.sort((a,b) => {
               if(a.rating === b.rating){
                   return b.ratingCount - a.ratingCount
               }else {
                   return 0
               }
           })
       }
    },
}


// const a = async () => {
//     for(let i = 0; i<24; i++){
//         const product = await database.ref(`products/${i}`)
//         product.update({
//             'rating': 0,
//             'ratingCount': 0
//         })
//     }
// }
// a()

