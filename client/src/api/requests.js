// import productsData from "../database/product";

// export const getAllProducts  = async ()=>{
//     return productsData;
// } 

// export const addProduct = async(newProduct)=>{
//     productsData.push(newProduct);
//     return newProduct;
// }

import axios from 'axios'
import { BASE_URL } from './base_url';

//get all products
export const getAllProducts = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/products`)
    .then(res=>{
        globalData = res.data;
    });

    return globalData;
}

//post new product
export const addProduct = (newProduct)=>{
    axios.post(`${BASE_URL}/products`,newProduct);
}

export const deleteProduct = async (id)=>{
   try {
        const response = await axios.delete(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (err) {
        console.error('Error deleting product:', err);
        throw err;
    }
}

export const editProduct = async (id,updatedProduct)=>{
    try {
        const response = await axios.put(`${BASE_URL}/products/${id}`,updatedProduct)
        return response.data;
    } catch (error) {
        console.error('Error updated product:', error);
        throw error;
    }
}

//get product by id
export const getProductByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then(res=>{
        globalData = res.data;
    });
    return globalData;
}