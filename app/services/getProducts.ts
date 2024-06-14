import baseUrl from "@/config";

const path = "/products";

const fullPath = baseUrl + path;

console.log(fullPath)
export const getProductData = async () => {
    try {
        const products = await fetch(fullPath,{
            cache: "no-cache",
        });
        
        const data = await products.json();
        return data
    } catch (error) {
        console.log(error)
    }
}