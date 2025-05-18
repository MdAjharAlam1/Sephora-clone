import express from 'express';
import { body } from 'express-validator';
import { createProduct,getAllFilter, getAllProducts, getProductById } from '../controllers/product.controllers.js';

const router = express.Router();

router.post('/create', [
    body('name').isLength({ min: 3 }).withMessage('Product name must be at least 3 characters long'),
    body('brand').isLength({ min: 2 }).withMessage('Brand name must be at least 2 characters long'),
    body('category').isLength({ min: 2 }).withMessage('Category name must be at least 2 characters long'),
    body('image').isURL().withMessage('Image URL is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('inStock').isBoolean().withMessage('In stock status is required'),
    body('features').isArray().withMessage('Features must be an array')
], createProduct);

router.get('/all', getAllProducts);
router.get('/allfilter', getAllFilter);
router.get('/:id', getProductById);


export default router;