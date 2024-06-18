'use client';

import { addItem } from '@/lib/store/features/cart/cartSlice';
import { AppStore, makeStore } from '@/lib/store/store';
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux';


const storeProvider = ({children}: {children: ReactNode}) => {

const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    
    storeRef.current = makeStore();
  }
  
  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default storeProvider