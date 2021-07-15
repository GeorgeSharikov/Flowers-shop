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
            const product = await database.ref(`products/${id}`)
            const productData = await product.get()
            return productData.val()
        }catch(err) {
            console.log(err)
        }
    }
}