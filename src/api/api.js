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
    popularitySort(products){
        return products
    },
    priceHighToLow(products){
        let productCopy = [...products]
        productCopy.forEach((i, index) => {
            i.price = Number(i.price.split('').filter(i => i!==' ').join(''))
            console.log(i)
        })
        console.log(productCopy)
       return productCopy.sort((a,b) =>  {
            return a.price - b.price
        }).reverse()

    },
    priceLowToHigh(products){
        let productCopy = [...products]
        productCopy.forEach((i, index) => {
            i.price = Number(i.price.split('').filter(i => i!==' ').join(''))
        })
        return productCopy.sort((a,b) => {
            return a.price - b.price
        })
    },
}

const a = [
    {price: 300, a: 2},
    {price: 400, a: 2},
    {price: 1, a: 2},
    {price: 56, a: 2},
]

const sortt = (a) => {
    return a.sort((a,b) => {
        return a.price - b.price
    }).reverse()

}
console.log(sortt(a))