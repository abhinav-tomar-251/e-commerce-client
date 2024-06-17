import baseUrl from "@/config";


export const getProductDataByID = async (id: string) => {
    const ProductIdPath =`/api/product/${id}`
    const singleProductPath = baseUrl + ProductIdPath;
    // console.log(singleProductPath)
    try {
        const response = await fetch(singleProductPath, {
            cache: "no-cache",
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        return [data]; 
    } catch (error) {
        console.log(error);
        return []; 
    }
};
