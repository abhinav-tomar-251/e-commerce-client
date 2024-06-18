"use client";

import { FaAngleRight, FaArrowRight, FaTrash } from "react-icons/fa";
import AppHeader from "../_components/header";
import NavBar from "../_components/navbar";
import Footer from "../_components/footer";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store/store";
import { useEffect } from "react";
import { showCart } from "@/lib/store/features/cart/cartSlice";
import { getProductData } from "@/app/services/getProducts";




const CartPage = () => {

const dispatch = useAppDispatch();
const product = useAppSelector((state : RootState)=> state.cartSlice.items)
  
 useEffect(()=> {
  const cartProduct = async () => {
    try {
    const products: Product[] = await getProductData();
      dispatch(showCart(products))
    } catch (error) {
      console.log("cart Error: " , error)
    }
  }
  cartProduct()
 }, []);

  function removeFromCart(): void {
    throw new Error("Function not implemented.");
  }

  function decreaseCount(id: any): void {
    throw new Error("Function not implemented.");
  }

  function increaseCount(id: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main>
      <AppHeader />
      <NavBar />
      {/* <NextBreadcrumb
        homeElement={`Home`}
        separator={<span><FaAngleRight className="text-slate-400 text-2xl" /></span>}
        activeClasses="text-amber-500"
        containerClasses="flex py-2"
        listClasses="hover:underline mx-2 font-semibold"
        capitalizeLinks
      /> */}
      <div className="flex flex-col py-8 mx-16">
        <h3 className="font-extrabold text-4xl">Your Cart</h3>
        <div className="flex flex-row gap-4 py-6" >
          {product.map((data)=>(
            <div className="flex w-2/3 flex-col gap-y-2">
            <div className="text-base border-slate-200 border-solid border flex-col gap-2 p-6 rounded-lg shadow-lg">
              <div className="flex justify-end">
                <Button
                 onClick={() => removeFromCart()}
                 variant={"destructive"}
                 className="text-white p-1 w-6 h-6"
               >
                 <FaTrash className="text-white" />
               </Button>
             </div>
             <div className="flex flex-row justify-start items-center">
             <img src={data.images.length > 0 ? data.images[0].url : 'defaultImageURL'} className="h-[100px] object-contain" alt="product-image" />
               <div className="flex flex-col gap-y-1 justify-center items-start p-2">
                 <h5>{data.title}</h5>
                 <div className="flex flex-row gap-x-2 justify-start items-center p-2">
                   <p className="text-xl font-semibold">${data.price}</p>
                   <div className="flex flex-row gap-x-2 justisy-start items-center p-2 bg-slate-400 rounded-full shadow-lg">
                     <Button
                       onClick={() => decreaseCount(data._id)}
                       className="bg-transparent outline-none shadow-none rounded-none hover:bg-transparent"
                     >
                       ➖
                     </Button>{" "}
                     {/* {productCount[data.id]}{" "} */}
                     <Button
                       onClick={() => increaseCount(data._id)}
                       className="bg-transparent outline-none shadow-none rounded-none hover:bg-transparent"
                     >
                       ➕
                     </Button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
          ))}
               
              
              {/* This part only shows once at right side with total order amount */}
              <div className="flex w-1/3 flex-col gap-y-2 border-slate-200 border-solid border rounded-2xl shadow-lg">
                <div className="text-base flex-col gap-2 p-6">
                  <p className="text-3xl font-semibold">Order Summary</p>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-start text-xl text-slate-400">
                      <p>Subtotal</p>
                      <p>Discount (-20%)</p>
                      <p>Delivery Fee</p>
                    </div>
                    <div className="flex flex-col text-xl items-end">
                      {/* <p>${totalPrice.toFixed(2)}</p> */}
                      {/* <p className="text-red-500">-${discount.toFixed(2)}</p> */}
                      <p>$15.00</p>
                    </div>
                  </div>
                  <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-3xl font-semibold">Total</p>
                    {/* <p className="text-3xl font-semibold">${finalPrice.toFixed(2)}</p> */}
                  </div>
                </div>
                <Button className="  px-4 text-white text-2xl py-6 bg-black rounded-3xl shadow-lg">
                  Proceed to Checkout <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
      </div>
      <Footer />
    </main>
  );
};

export default CartPage;
