import mongoose from 'mongoose';

import { answerSchema } from './answer.model';

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
    correctAnswer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'answer',
      required: true,
    },
    answers: [answerSchema],
  },
  { timestamps: true }
);

export const Question = mongoose.model('question', questionSchema);
