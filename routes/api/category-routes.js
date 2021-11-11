const router = require('express').Router();

const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  }).then(categories => res.json(categories)).catch(err => res.json(err))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {id: req.params.id},
    include: [Product],
  }).then(categories => res.json(categories)).catch(err => res.json(err))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    Category_name: req.body.Category_name
  }).then(categories => res.json(categories)).catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req, body, {
    where: {
      id: req.params.id
    }
  }).then(categories => res.json(categories)).catch(err => res.json(err))

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(categories => res.json(categories)).catch(err => res.json(err))
});

module.exports = router;
