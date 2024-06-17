import axios from 'axios'
import baseUrl from '@/config';

const path = '/api/product';

const fullPath = baseUrl + path;

export const getProductData = async () => {
    try {
        const response = await axios.get(fullPath, {
            headers: {
                'Cache-Control': 'no-cache',
            },
        });
        //  console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error; 
    }
};
