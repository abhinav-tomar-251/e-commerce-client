"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CheckboxOption from "../_components/checkBoxOptions";
import { Button } from "@/components/ui/button";
import { getProductDataByID } from "@/app/services/getProductbyID";
import mongoose from "mongoose";
import AppHeader from "../_components/header";
import NavBar from "../_components/navbar";
import Footer from "../_components/footer";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/store/features/cart/cartSlice";
import { AppDispatch } from "@/lib/store/store";
import { useDispatch } from "react-redux";


const ProductDetail =  () => {
  const dispatch: AppDispatch = useDispatch()
  
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  
  const [product, setProduct] = useState<Product[]>([]);


  useEffect(() => {
    const fetchProduct = async () => {
  
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      // console.log(id)
      if(id){
        try {
          const products: Product[] = await getProductDataByID(id);
          // console.log(products)
          setProduct(products)
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    if (typeof window !== 'undefined') {
      fetchProduct();
    }
  }, []);

  const addProduct = (_id: string) => {
    console.log("Item added in cart");
    const productItem = product.find(p => p._id === _id);
    if (productItem) {
      dispatch(addToCart({ _id: productItem._id, quantity: 1 }));
    }
  }

  if (!product) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(value)
        ? prevSelectedColors.filter((color) => color !== value)
        : [...prevSelectedColors, value]
    );
  };

 


  return (
    <main>
     <AppHeader/>
     <NavBar/>
      <div className="relative flex mx-32 py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      {product.map((data) => (
        <div key={data._id} className='grid grid-cols-2 justify-start items-start gap-4 p-8 h-2/4'>
          <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-2 gap-3 space-x-4 cursor-pointer">
            <img src={data.images.length > 0 ? data.images[0].url : 'defaultImageURL'} className='border border-slate-300 rounded-lg shadow-md   p-2 object-contain' alt="Selected product Image" />
            <img src={data.images.length > 0 ? data.images[0].url : 'defaultImageURL'}  className='border border-slate-300 rounded-lg shadow-md   p-2 object-contain' alt="Selected product Image" />
            <img src={data.images.length > 0 ? data.images[0].url : 'defaultImageURL'}  className='row-span-3 col-span-2 border border-slate-300   p-2 object-contain rounded-lg shadow-md' alt="Selected product Image" />
          </div>
          <div className='grid justify-start gap-2 px-4'>
            <h3 className="font-extrabold text-4xl">{data.title}</h3>
            {/* <Image src="/assets/star-rating.png" alt="rating" width={150} height={30} /> */}
            <p>{data.totalrating || 3.5}</p>
            <p className='text-3xl font-semibold flex items-center gap-2'>${data.price} <span className='text-slate-300 line-through'>${data.price}</span> <span className='bg-red-300 p-1 rounded-full text-red-500 text-sm'>-40%</span></p>
            <p className="text-sm text-slate-400">{data.description}</p>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="container mx-auto mt-8">
              <div>
                <h1 className="text-2xl font-bold mb-4">Choose Colors</h1>
                <div className="flex flex-row space-y-2">
                  <CheckboxOption
                    value="green"
                    color="green"
                    label="Green"
                    checked={selectedColors.includes("green")}
                    onChange={handleCheckboxChange}
                  />
                  <CheckboxOption
                    value="blue"
                    color="blue"
                    label="Blue"
                    checked={selectedColors.includes("blue")}
                    onChange={handleCheckboxChange}
                  />
                  <CheckboxOption
                    value="black"
                    color="black"
                    label="Black"
                    checked={selectedColors.includes("black")}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className='flex flex-row justify-start items-center gap-x-4'>
              <Button className='flex w-full justify-center items-center px-2 text-white text-2xl py-6 bg-black rounded-full shadow-lg' onClick={()=> {addProduct(data._id)}}>
                Add to Cart 🛒
              </Button>
            </div>
          </div>
        </div>
      ))}
    <Footer/>
    </main>
  );
};

export default ProductDetail;
