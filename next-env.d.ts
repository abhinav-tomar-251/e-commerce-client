/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
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