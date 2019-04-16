import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 120,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 240,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model('category', categorySchema);
