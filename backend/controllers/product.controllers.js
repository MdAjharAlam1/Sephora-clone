import { Product } from "../models/product.models.js";
import { createProductService } from "../services/product.service.js";
import { validationResult } from "express-validator";

export const createProduct = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const { name, brand, category, image, price, inStock, features } = req.body;
        const newProduct = await createProductService({ name, brand, category, image, price, inStock, features });
        return res.status(201).json(newProduct);
    } catch (error) {
        console.log('Error from create product controller', error.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

export const getAllProducts = async (req, res) => {
    try {
      const { category, brand, minPrice, maxPrice } = req.query;
  
      // Build a dynamic filter object
      const filter = {};
      if (category) filter.category = category;
      if (brand) filter.brand = brand;
      if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
      if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
  
      const products = await Product.find(filter);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllFilter = async (req, res) => {
    try {
        const categories = await Product.distinct("category");
        const brands = await Product.distinct("brand");
        res.status(200).json({ categories, brands });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch filters' });
    }
}