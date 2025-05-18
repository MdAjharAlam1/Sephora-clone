import express from 'express'
import { getUserProfile, userLogin, userLogout, userRegister } from '../controllers/user.controllers.js'
import { authUser } from '../middlewares/auth.middleware.js'
import { body } from 'express-validator'

const router = express()

router.post('/signup',[
    body('email').isEmail().withMessage('Email must be atleast 6 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 8 characters long'),
    body('fullname').isLength({min:5}).withMessage('fullname must be atleast 3 characters long'),
    body('phone').isInt().isLength({min:10}).withMessage('fullname must be atleast 3 characters long')

],userRegister)

router.post('/login',[
    body('email').isEmail().withMessage('Email must be atleat 6 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 8 characters long')
],userLogin)
router.get('/Profile',authUser,getUserProfile)
router.get('/logout', userLogout)



export default router