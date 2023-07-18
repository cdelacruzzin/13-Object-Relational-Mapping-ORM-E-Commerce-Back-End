const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {  //function returns a promise with 'async'
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [{model: Product}],
  });  

  res.json(categories);

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const singleCat = await Category.findByPk(req.params.id, {
      include:[{model: Product}]
    });
    if(singleCat !== 0) {
      res.status(200).send(singleCat)
    } else {
      res.status(404).send('category does not exist')
    }
  } catch (error) {
    res.json(error)
  }

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
