const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'Qrary API is Already Running...'
    });
});

module.exports = router;