import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product[]>) => {
        state.items.push(action.payload);
    },
    showCart: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
   }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, showCart } = cartSlice.actions

export default cartSlice.reducer