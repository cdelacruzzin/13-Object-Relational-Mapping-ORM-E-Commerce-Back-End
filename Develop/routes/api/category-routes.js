const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {  //function returns a promise with 'async'
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll();  //await is used to pause the async function until a promise is fulfilled, and resumes after fulfill/reject

  res.json(categories);

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
