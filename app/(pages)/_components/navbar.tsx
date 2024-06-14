"use client"

import React from 'react'
// import DropdownButton from './dropdownButton'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { FaShoppingCart } from 'react-icons/fa'
// import { useCart } from "../../../context/cartContext"; 
// import { UserButton } from 'libs/ui-components/src/components/auth/userButton'

const NavBar = () => {
  // const { cartCount } = useCart();
  return (
    <nav className='flex  flex-wrap md:flex-nowrap px-4 md:px-12 lg:px-20 xl:px-60 py-4 justify-between items-center gap-x-4'>
      <div className='flex  items-center gap-4'>
        <Link href="/Home" className='text-lg md:text-2xl font-bold cursor-pointer whitespace-nowrap'>🛒e-commerce</Link> 
        {/* <DropdownButton/> */}
        <Link href="/OnSale" className='text-sm md:text-base cursor-pointer whitespace-nowrap'>On Sale</Link>
        <Link href="/NewArrivals" className='text-sm md:text-base cursor-pointer whitespace-nowrap'>New Arrivals</Link>
        <Link href="/Brands" className='text-sm md:text-base cursor-pointer whitespace-nowrap'>Brands</Link>
      </div>
      <div className='flex items-center gap-4 mt-4 md:mt-0'>
        <span className='w-full md:w-[200px] lg:w-[300px]'><Input id='search' type='search' placeholder='...Search Here' className='rounded-full bg-slate-200 w-full' /></span>
        <div className="relative">
          <Link href="/Cart" className='text-lg md:text-2xl cursor-pointer'>
            <span className="relative inline-block">
              <FaShoppingCart />
              {/* {cartCount > 0 && ( */}
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 absolute -top-2 -right-3">
                  {/* {cartCount} */}  0
                </span>
              {/* )} */}
            </span>
          </Link>
        </div>
        {/* <UserButton /> */}
      </div>
    </nav>
  )
}

export default NavBar
