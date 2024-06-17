import axios from 'axios'
import baseUrl from "@/config";


export const getProductDataByID = async (id: string) => {
    const ProductIdPath =`/api/product/${id}`
    const singleProductPath = baseUrl + ProductIdPath;
    // console.log(singleProductPath)
    try {
        const response = await axios.get(singleProductPath, {
            headers: {
                'Cache-Control': 'no-cache',
            },
        });
        
        if (!response) {
            throw new Error("Failed to fetch product");
        }

        const data = await response.data;
        return [data]; 
    } catch (error) {
        console.log(error);
        return []; 
    }
};
