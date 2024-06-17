/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/product",
                destination: "http://localhost:7000/api/product",
            },
            {
                source: "/api/product/:id",
                destination: "http://localhost:7000/api/product/:id",
            },
        ];
    }
};

export default nextConfig;
