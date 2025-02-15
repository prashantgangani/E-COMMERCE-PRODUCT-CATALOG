const express = require('express');
const router = express.Router();

// In-memory product data (usually fetched from a database)
let products = [
  { id: 1, name: 'Laptop', category: 'electronics' },
  { id: 2, name: 'Shoes', category: 'clothing' },
  { id: 3, name: 'Smartphone', category: 'electronics' },
  { id: 4, name: 'T-Shirt', category: 'clothing' },
];

// GET all products
router.get('/', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filteredProducts = products.filter(p => p.category === category);
    return res.json(filteredProducts);
  }
  res.json(products);
});

// GET a specific product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

module.exports = router;