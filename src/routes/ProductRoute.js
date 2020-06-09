const express = require('express');

const router = express.Router();
const { multerUploads } = require('../middlewares/multer');

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  rateProduct,
  searchProduct
} = require('../controllers/productController');

const { protect, authorize } = require('../middlewares/verifyAuth');

router
  .route('/')
  .get(getProducts)
  .post(protect, authorize('farmer', 'admin'), multerUploads, createProduct);
  
router.get('/search',protect, searchProduct )
router
  .route('/:slug')
  .get(getProduct)
  .put(protect, authorize('farmer', 'admin'), updateProduct)
  .delete(protect, authorize('farmer', 'admin'), deleteProduct);

router
  .route('/:slug/rate')
  .post(protect, rateProduct);

module.exports = router;
