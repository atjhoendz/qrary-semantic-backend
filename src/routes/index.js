const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/BookController');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'Qrary API is Already Running...'
    });
});

router.get('/getall', getAll);

module.exports = router;