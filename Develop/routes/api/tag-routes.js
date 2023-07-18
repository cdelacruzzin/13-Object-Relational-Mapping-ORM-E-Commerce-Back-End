const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [{ model: Product }]
  });
  res.json(tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  });

  res.json(tag);

});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body);
  res.json(newTag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update({
      tag_name: req.body.tag_name
    }, 
    {
      where: { id: req.params.id },
    });
    res.json(updateTag);
  } catch (error) {

  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value

  try{
    const deleteTag = await Tag.destroy({
      where: {id: req.params.id},
    });
    if (deleteTag !== 0) {
      res.status(200).send('tag deleted');
    } else {
      res.status(404).send('tag not found');
    }
  } 
  catch(err) {
    res.json(err);
  }
});

module.exports = router;
