import baseUrl from "@/config";

const path = "/cart";

const fullPath = baseUrl + path;

console.log(fullPath);

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

interface AddCart {
    productId: string;
    quantity: number;
}

export const addToCart = async ({ productId, quantity }: AddCart) => {
    try {
       
        if (!productId) {
            throw new Error("productId is required");
        }

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than 0");
        }

        const response = await fetch(fullPath, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productId: productId,
                quantity: quantity,
            }),
           
        });

        // Check if request is successful
        if (!response.ok) {
            throw new Error("Failed to add product to cart");
        }

        // Parse the response JSON
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error adding product to cart:", error);
        throw error;
    }
};
