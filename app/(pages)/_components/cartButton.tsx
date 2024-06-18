'use client'

import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store/store'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartButton = () => {

    const items = useAppSelector((state: RootState )=> state.cartSlice.items);

  return (
    <div className="relative">
          <Link href="/Cart" className='text-lg md:text-2xl cursor-pointer'>
            <span className="relative inline-block">
              <FaShoppingCart />
              {items.length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 absolute -top-2 -right-3">
                  {items.length}  
                </span>
               )} 
            </span>
          </Link>
    </div>
  )
}

export default CartButton;

