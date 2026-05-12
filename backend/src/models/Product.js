import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLenght: 2,
            maxLenght: 100
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxLenght:500,
            price:{ 
                Type: Number,
                required: true,
                min: 0
            },
            stock: {
                type: Number,
                required: true,
                min: 0,
                default:0
            },
            image:{
                type: String,
                default: ""
            },
            createBy:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
                index:true
            }
        }
    },
    {timestamps: true}
);


const Product = mongoose.model('Product', productSchema);
export default Product;