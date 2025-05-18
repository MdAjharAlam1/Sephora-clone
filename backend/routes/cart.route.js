import express from 'express';
import { addToCart,getCart,removeFromCart } from '../controllers/cart.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/add', authUser, addToCart);
router.get('/', authUser, getCart);
router.delete('/remove', authUser, removeFromCart);


export default router;