import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: []
}

export const productSlice = createSlice({
  name: 'productStore',
  initialState,
  reducers: {
    updatedProducts: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { updatedProducts } = productSlice.actions

export default productSlice.reducer