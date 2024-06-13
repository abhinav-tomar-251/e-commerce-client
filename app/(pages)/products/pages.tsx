'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/getProducts";


interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: number;
    image: string;
    count: number;
}

const ProductPage = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Product[] = await getProductData();
        console.log(products)
        setData(products)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="py-12 mx-40 grid grid-cols-3 gap-8">
        {data.map((product) => (
          <Link key={product.id} href={{ pathname: `/singleProduct`, query: { id: product.id } }}>
            <Card className="flex flex-col justify-center items-center">
              <img src={product.image} className="h-[298px] object-contain" alt="product-image" />
              <CardHeader>{product.title}</CardHeader>
              <CardContent>${product.price}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
