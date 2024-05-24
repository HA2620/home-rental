const express = require('express');
const router = express.Router();
const { getHouses, getHouseById, createHouse } = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getHouses).post(protect, createHouse);
router.route('/:id').get(getHouseById);

module.exports = router;
