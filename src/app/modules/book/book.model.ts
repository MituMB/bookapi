import { model, Schema } from "mongoose";
import { Category, TBook } from "./book.interface";
// import uniqueValidator  from '@types/mongoose-unique-validator';

const bookSchema = new Schema<TBook>({
  title: {   type: String,
    required: true,
    unique: true },
  author: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    enum: Object.values(Category),
    required: true,
  },
  description: { type: String },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, default: true },
},
{ timestamps: true }
);
// bookSchema.plugin(uniqueValidator)

export const BookModel = model<TBook>('book', bookSchema);