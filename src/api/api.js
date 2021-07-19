import {database} from '../Firebase'

export const apiProducts = {
    getAllProducts: async () => {
        try{
            const productsList = await database.ref('products')
            const productsListData =  await productsList.get()
            return productsListData.val()
        }catch(err) {
            console.log(err)
        }
    },
    getChosenProduct: async (id) => {
        try{
            const product = await database.ref(`products/${id-1}`)
            const productData = await product.get()
            return productData.val()
        }catch(err) {
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
}
