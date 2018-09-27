import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema

const CategorySchema = new Schema({
  title: String
})

module.export = model('Category', CategorySchema)