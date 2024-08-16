const express = require('express');
const router = express.Router();

// Define API routes
router.get('/', (req, res) => {
    res.send('Hello from API!');
});

module.exports = router;
