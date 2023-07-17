// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

//this sets up many to one relationship from Product to Category.
//means each product belongs to one category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
})

// Tags belongToMany Products (through ProductTag)


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
