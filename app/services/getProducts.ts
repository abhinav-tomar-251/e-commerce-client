
export const getProductData = async () => {
    try {
        const products = await fetch("http://localhost:7000/products",{
            cache: "no-cache",
        });
        
        const data = await products.json();
        return data
    } catch (error) {
        console.log(error)
    }
}