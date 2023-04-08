const express = require('express');
const router = express.Router();
const {getProducts,getProductsTesting} = require('../Controller/list')


router.route('/').get(getProducts);
router.route('/testing').get(getProductsTesting);

module.exports = router;