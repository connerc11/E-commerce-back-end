const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'catgeory_id']
      },
    ]

  }).then(productData => res.json(productData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['product_name', 'stock', 'category_id', 'price' ]
      },
    ]
  }).then(ProductData => {
    if (!ProductData) {
      res.status(404).json({ message: 'No  tag with this id' });
      return;
    }
    res.json(ProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  }).then(ProductData => res.json(ProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(ProductData => res.json(ProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(ProductData => {
      if (ProductData) {
        res.status(404).json({ message: 'No Tag found with this id!' });
        return;
      }
      res.json(ProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
