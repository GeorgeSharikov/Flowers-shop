import {database} from '../Firebase'

export const apiProducts = {
    getAllProducts: async () => {
        const productsList = database.ref()
        const produtsListData =  await productsList.get()
        return produtsListData.val()
    }
}
