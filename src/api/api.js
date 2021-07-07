import {database} from '../Firebase'

export const apiProducts = {
    getAllProducts: async () => {
        try{
            const productsList = database.ref()
            const productsListData =  await productsList.get()
            return productsListData.val()
        }catch(err) {
            console.log(err)
        }
    }
}
