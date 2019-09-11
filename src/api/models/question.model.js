import mongoose from 'mongoose';

export const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  correct: {
    type: Number,
    required: true,
  },
});

const questionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'category',
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['binary', 'single', 'multiple'],
      default: 'single',
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['easy', 'medium', 'hard'],
      default: 'easy',
    },
    answers: [answerSchema],
  },
  { timestamps: true }
);

export const Question = mongoose.model('question', questionSchema);
