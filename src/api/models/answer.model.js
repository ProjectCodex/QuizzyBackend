import mongoose from 'mongoose';

export const answerSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Answer = mongoose.model('answer', answerSchema);
