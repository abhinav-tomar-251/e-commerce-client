'use client';

import { addItem } from '@/lib/store/features/cart/cartSlice';
import { AppStore, makeStore } from '@/lib/store/store';
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux';


const storeProvider = ({children}: {children: ReactNode}) => {

const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // storeRef.current.dispatch(addItem("test item"));
  }
  
  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default storeProvider