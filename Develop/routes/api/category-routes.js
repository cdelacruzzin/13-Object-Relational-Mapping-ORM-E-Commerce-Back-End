const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {  //function returns a promise with 'async'
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [{model: Product}],  //also creates a product for this category
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
    if (singleCat) {
      res.json(singleCat);
    } else {
      res.status(404).send('category not found');
    }
  } catch (error) {
    res.status(404).json(error)
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body, {
      include: [{model: Product}]
    });
    res.json(newCat);










  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try {
    const updateCat = await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {id: req.params.id},
    });

    if (updateCat) {
      res.json(updateCat);
    } else {
      res.status(404).send('unable to update category');
    }
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({
      where: {id: req.params.id}
    });

    if (deleteCat) {
      res.json(deleteCat);
    } else {
      res.status(404).send('category not found');
    }
  } catch (error) {
    res.status(404).json(error)
  }
});

module.exports = router;
