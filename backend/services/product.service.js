import { Product } from "../models/product.models.js";

export const createProductService = async ({ name, brand, category, image, price, inStock, features }) => {
    if (!name || !brand || !category || !image || !price) {
        throw new Error("All fields are required");
    }
    const newProduct = await Product.create({ name, brand, category, image, price, inStock, features });
    return newProduct;
};