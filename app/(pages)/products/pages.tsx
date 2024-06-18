'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import  {getProductData}  from "../../services/getProducts";
import mongoose from "mongoose";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { addItem } from "@/lib/store/features/cart/cartSlice";
import { updatedProducts } from "@/lib/store/features/products/productSlice";
import { RootState } from "@/lib/store/store";

const ProductPage = () => {
  const dispatch  = useAppDispatch();
  const product = useAppSelector((state : RootState) => state.productSlice.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Product[] = await getProductData();
        // console.log(products)
        dispatch(updatedProducts(products))
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);


  
  const addProduct = () => {
    console.log("Item added in cart");
    // dispatch(addItem(product));
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="font-extrabold text-4xl text-center">Our Products</h3>
      <div className="py-12 mx-40 grid grid-cols-3 gap-8">
        {product.map((data) => (
          <Link key={data._id} href={{ pathname: `/singleProduct`, query: { id: data._id } }}>
            <Card className="flex flex-col justify-center  p-2">
              <img src={data.images.length > 0 ? data.images[0].url : 'defaultImageURL'} className="h-[100px] object-contain" alt="product-image" />
              <CardHeader className=" text-nowrap overflow-hidden hover:overflow-visible hover:text-wrap">{data.title}</CardHeader>
              <CardContent className="flex flex-row justify-between items-center">${data.price} <Button  onClick={()=> {addProduct()}}>Add to Cart</Button></CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
