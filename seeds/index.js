const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds')
const seedTags = require('./tag-seeds')
const seedProductTags = require('./product-tag-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log(' database synced');
    await seedCategories();
    console.log('catgeories seeded')
    await seedProducts();
    console.log('products seeded');
    await seedTags();
    console.log('tags seeded');
    await seedProductTags();
    console.log('seeded')

    process.exit(0);
}

seedAll();

