import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import cartReducer from './features/cart/cartSlice';
import authReducer from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productReducer,
      auth: authReducer,
      cart: cartReducer,
    },
  });
};

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
