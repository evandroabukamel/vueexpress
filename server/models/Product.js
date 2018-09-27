import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema

const ProductSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String
})

export default model('Product', ProductSchema)