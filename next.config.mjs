/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/products",
                destination: "http://localhost:7000/products",
            },
            {
                source: "/products/:productId",
                destination: "http://localhost:7000/proucts/:productId",
            },
            {
                source: "/cart",
                destination: "http://localhost:7000/cart",
            },
        ];
    }
};

export default nextConfig;
