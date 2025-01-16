const express = require("express");
const { verifyAndSavePayment, createOrder, getRazorpayApiKey, allPayments } = require("../controller/PaymentController.js");
const { authorizeRoles } = require("../middleware/auth.js");
const router = express.Router();

router.route("/payment/process").post( createOrder);

router.route("/verify").get( verifyAndSavePayment);

router.route('/razorpay-key').get( getRazorpayApiKey);

router.route('/allPayment').get(  allPayments);


module.exports = router;