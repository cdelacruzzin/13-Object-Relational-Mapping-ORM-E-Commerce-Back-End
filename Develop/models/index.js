// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

//this sets up many to one relationship from Product to Category.
//means each product belongs to one category
Product.belongsTo(Category, {
  foreignKey: 'productId',
  onDelete: 'CASCADE',
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
