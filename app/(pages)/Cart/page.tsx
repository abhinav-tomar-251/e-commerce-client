'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store/store';
import { fetchCart, addToCart } from '@/lib/store/features/cart/cartSlice';

const CartPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const cartState = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleAddToCart = (_id: string, quantity: number) => {
    dispatch(addToCart({ _id, quantity }));
  };

  if (cartState.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (cartState.status === 'failed') {
    return <div>Error: {cartState.error}</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartState.items.map((item, index) => (
          <li key={index}>
            Product ID: {item._id}, Quantity: {item.quantity}
            <button onClick={() => handleAddToCart(item._id, item.quantity + 1)}>Add more</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
