const express = require('express');
const router = express.Router();

// Sample products
const products = [
    { id: 1, name: 'Tile', price: 150 },
    { id: 2, name: 'Faucet', price: 899 },
    { id: 3, name: 'Granite', price: 1200 }
];

// GET all products
router.get('/', (req, res) => {
    res.status(200).send(products);
});

// POST add new product
router.post('/', (req, res) => {
    const newProduct = req.body;

    // Optional: assign ID automatically
    newProduct.id = products.length + 1;

    products.push(newProduct);
    res.status(201).send({ message: 'Product added successfully', product: newProduct });
});

module.exports = router;
