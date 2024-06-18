import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface CartItem {
  _id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  try {
    const response = await axios.get('http://localhost:7000/api/user/cart'); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cart.');
  }
});

export const addToCart = createAsyncThunk<void, CartItem>(
  'cart/addToCart',
  async (item: CartItem, { dispatch, getState }) => {
    const token = getState().auth.token; // Assuming auth state holds the user's JWT token
    try {
      const response = await axios.post('http://localhost:7000/api/user/cart', item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchCart()); 
    } catch (error) {
      throw new Error('Failed to add to cart.');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default cartSlice.reducer;
