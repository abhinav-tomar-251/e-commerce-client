"use client";

import { FaAngleRight, FaArrowRight, FaTrash } from "react-icons/fa";
import AppHeader from "../_components/header";
import NavBar from "../_components/navbar";
import Footer from "../_components/footer";


interface ProductsData {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  image: string;
  count: number;
}
interface Accumulator {
  [key: string]: ProductsData & { quantity: number };
}


const CartPage = () => {
//   const { cartItems, productCount, increaseCount, decreaseCount, removeFromCart } = useCart();
 const cartItems = [1]
//   const totalPrice = cartItems.reduce((acc, product) => acc + product.price * productCount[product.id], 0);
//   const discount = totalPrice * 0.2;
//   const deliveryFee = 15;
//   const finalPrice = totalPrice - discount + deliveryFee;

//   const groupedCartItems = Object.values(cartItems.reduce((acc: Accumulator, currentItem) => {
//     if (!acc[currentItem.id]) {
//       acc[currentItem.id] = { ...currentItem, quantity: 1 };
//     } else {
//       acc[currentItem.id].quantity += 1;
//     }
//     return acc;
//   }, {}));

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
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center h-screen text-2xl">
            Your Cart 🛒 is Empty
          </div>
        ) : (
        //   groupedCartItems.map((data) => (
        //     <div className="flex flex-row gap-4 py-6" key={data.id}>
        //       <div className="flex w-2/3 flex-col gap-y-2">
        //         <div className="text-base border-slate-200 border-solid border flex-col gap-2 p-6 rounded-lg shadow-lg">
        //           <div className="flex justify-end">
        //             <Button
        //               onClick={() => removeFromCart(data.id)}
        //               variant={"destructive"}
        //               className="text-white p-1 w-6 h-6"
        //             >
        //               <FaTrash className="text-white" />
        //             </Button>
        //           </div>
        //           <div className="flex flex-row justify-start items-center">
        //             <img
        //               src={data.image}
        //               className="w-24 h-24 border border-slate-300 rounded-lg shadow-md p-2 object-contain"
        //               alt="Selected product Image"
        //             />
        //             <div className="flex flex-col gap-y-1 justify-center items-start p-2">
        //               <h5>{data.title}</h5>
        //               <div className="flex flex-row gap-x-2 justify-start items-center p-2">
        //                 <p className="text-xl font-semibold">${data.price}</p>
        //                 <div className="flex flex-row gap-x-2 justisy-start items-center p-2 bg-slate-400 rounded-full shadow-lg">
        //                   <Button
        //                     onClick={() => decreaseCount(data.id)}
        //                     className="bg-transparent outline-none shadow-none rounded-none hover:bg-transparent"
        //                   >
        //                     ➖
        //                   </Button>{" "}
        //                   {productCount[data.id]}{" "}
        //                   <Button
        //                     onClick={() => increaseCount(data.id)}
        //                     className="bg-transparent outline-none shadow-none rounded-none hover:bg-transparent"
        //                   >
        //                     ➕
        //                   </Button>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
              
        //       {/* This part only shows once at right side with total order amount */}
        //       <div className="flex w-1/3 flex-col gap-y-2 border-slate-200 border-solid border rounded-2xl shadow-lg">
        //         <div className="text-base flex-col gap-2 p-6">
        //           <p className="text-3xl font-semibold">Order Summary</p>
        //           <div className="flex flex-row justify-between">
        //             <div className="flex flex-col justify-start text-xl text-slate-400">
        //               <p>Subtotal</p>
        //               <p>Discount (-20%)</p>
        //               <p>Delivery Fee</p>
        //             </div>
        //             <div className="flex flex-col text-xl items-end">
        //               <p>${totalPrice.toFixed(2)}</p>
        //               <p className="text-red-500">-${discount.toFixed(2)}</p>
        //               <p>$15.00</p>
        //             </div>
        //           </div>
        //           <div className="relative flex py-5 items-center">
        //             <div className="flex-grow border-t border-gray-400"></div>
        //           </div>
        //           <div className="flex flex-row justify-between">
        //             <p className="text-3xl font-semibold">Total</p>
        //             <p className="text-3xl font-semibold">${finalPrice.toFixed(2)}</p>
        //           </div>
        //         </div>
        //         <Button className="  px-4 text-white text-2xl py-6 bg-black rounded-3xl shadow-lg">
        //           Proceed to Checkout <FaArrowRight className="ml-2" />
        //         </Button>
        //       </div>
        //     </div>
        //   ))
        <div>This is cart</div>
        )}
        
      </div>
      <Footer />
    </main>
  );
};

export default CartPage;
