export class Controller {
  constructor(model) {
    this.model = model;

    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.list = this.list.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req, res) {
    try {
      const item = await this.model.create(req.body);

      res.status(201).json({ item });
    } catch (err) {
      console.error(err);

      res.status(400).json({ message: 'Invalid Request Data' });
    }
  }

  async get(req, res) {
    try {
      const item = await this.model.findById(req.params.id);

      res.status(200).json({ item });
    } catch (err) {
      console.error(err);

      res.status(400).json({ message: 'Invalid Request Data' });
    }
  }

  async list(req, res) {
    try {
      const items = await this.model.find();

      res.status(200).json({ items });
    } catch (err) {
      console.error(err);

      res.status(400).json({ message: 'Invalid Request Data' });
    }
  }

  async update(req, res) {
    try {
      const item = await this.model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).json({ put: item });
    } catch (err) {
      console.error(err);

      res.status(400).json({ message: 'Invalid Request Data' });
    }
  }
  async delete(req, res) {
    try {
      const item = await this.model.findByIdAndRemove(req.params.id);

      res.status(200).json({ item });
    } catch (err) {
      console.error(err);

      res.status(400).json({ message: 'Invalid Request Data' });
    }
  }
}
