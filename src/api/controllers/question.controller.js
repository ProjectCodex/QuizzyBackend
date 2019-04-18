import { Controller } from './base.controller';

export class QuestionController extends Controller {
  async create(req, res) {
    try {
      const item = await this.model.create(req.body);
      const payload = { correctAnswer: item.answers[0]._id };

      // Grab the first answer from the created question as it will always be the
      // correct answer. Make an update call to update the question with the correct
      // answer's ID.
      const updatedItem = await this.model.findByIdAndUpdate(
        item._id,
        payload,
        { new: true }
      );

      res.status(201).send({ item: updatedItem });
    } catch (err) {
      console.error(err);

      res.status(400).json({ message: 'Invalid Request Data' });
    }
  }
}
