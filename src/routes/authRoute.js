const express = require('express');
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  sendBvnVerification,
  verifyBvn
} = require('../controllers/authController');

const router = express.Router();

const { protect, authorize } = require('../middlewares/verifyAuth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.post('/bvn',protect, authorize('farmer'), sendBvnVerification)
router.post('/verify',protect, authorize('farmer'), verifyBvn)

module.exports = router;
