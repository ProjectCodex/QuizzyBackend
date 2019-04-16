import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 240,
    },
    password: {
      type: String,
      required: true,
      maxlength: 80,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('user', userSchema);
