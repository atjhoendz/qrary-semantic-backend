const express = require('express');
const router = express.Router();
const { getBooks } = require('../controllers/BookController');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'Qrary API is Already Running...'
    });
});

router.get('/books', getBooks);
router.get('/:isbn', getBooks);

module.exports = router;