const express = require('express');
const app = express();
PORT = process.env.PORT || 5000;
import { PRODUCTS } from './products';

// API endpoint for all products
app.get('api/products', (req, res) => {
    res.json(PRODUCTS);
});

// API endpoint for single product by id
app.get('api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = PRODUCTS.find(product => product.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product Not Found' });
    }
    res.json(product);
})

// Starting Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});