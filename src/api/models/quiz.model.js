import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 120,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'category',
      required: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { timestamps: true }
);

export const Quiz = mongoose.model('quiz', quizSchema);
