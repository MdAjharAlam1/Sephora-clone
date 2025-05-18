import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        rquired:true
    },
    price:{
        type:Number,
        required:true
    },
    
    features:{
        type:[String],
        default:[]
    },
    inStock:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

export const Product = mongoose.model('Product',productSchema)