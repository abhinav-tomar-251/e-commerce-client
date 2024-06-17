'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/getProducts";
import mongoose from "mongoose";


interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  quantity: number;
  sold?: number;
  images: {
    public_id: string;
    url: string;
  }[];
  color?: string[];
  tags?: string;
  ratings?: {
    star: number;
    comment: string;
    postedby: mongoose.Schema.Types.ObjectId;
  }[];
  totalrating?: number;
}
const ProductPage = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Product[] = await getProductData();
        // console.log(products)
        setData(products)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="font-extrabold text-4xl text-center">Our Products</h3>
      <div className="py-12 mx-40 grid grid-cols-3 gap-8">
        {data.map((product) => (
          <Link key={product._id} href={{ pathname: `/singleProduct`, query: { id: product._id } }}>
            <Card className="flex flex-col justify-center  p-2">
              <img src={product.images.length > 0 ? product.images[0].url : 'defaultImageURL'} className="h-[100px] object-contain" alt="product-image" />
              <CardHeader className=" text-nowrap overflow-hidden hover:overflow-visible hover:text-wrap">{product.title}</CardHeader>
              <CardContent>${product.price}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
