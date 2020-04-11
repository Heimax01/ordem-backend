const Product = require("../Models/Product");

module.exports = {
  async index(req, res) {
    const listproducts = await Product.find();

    return res.json(listproducts);
  },

  async store(req, res) {
    const { weight, description } = req.body;

    let product = await Product.findOne({ weight, description });

    if (!weight || !description) {
      return res.status(204).json();
    }

    if (!product) {
      product = await Product.create({ weight, description });
    }

    return res.json(product);
  },
  async delete(req, res) {
    await Product.findOneAndDelete({ _id: req.params.id });

    return res.status(200).json();
  },
};
