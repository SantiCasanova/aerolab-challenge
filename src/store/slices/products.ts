import { createSlice } from "@reduxjs/toolkit"
import ProductDataService from '../../services/product.service'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: []
  },
  reducers: {
    setProductList: (state, action) => {
      state.list = action.payload;
    }
  }
})

export const {setProductList} = productSlice.actions

export default productSlice.reducer;

export const fetchAllProducts = () => (dispatch: any) => {
  ProductDataService.getAll().then(response => {
    dispatch(setProductList(response?.data))
  })
  .catch(error => console.log(error))
}

