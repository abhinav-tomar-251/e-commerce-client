
export const getProductDataByID = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:7000/products/${id}`, {
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
