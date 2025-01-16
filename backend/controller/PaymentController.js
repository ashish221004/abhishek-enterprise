const Razorpay = require("razorpay");
const Payment = require("../models/PaymentModel.js");
const crypto = require("crypto");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
console.log(process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET);

exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  const { amount, currency = "INR" } = req.body;

  const options = {
      amount: amount * 100,
      currency,
      receipt: `receipt_${Date.now()}`,
  };

  try {
      const order = await razorpay.orders.create(options);
      res.status(200).json({
          success: true,
          order_id: order.id,
          currency: order.currency,
          amount: order.amount,
      });
  } catch (error) {
      console.error('Error creating Razorpay order:', error);
      if (error?.error?.code === 'ORDER_EXPIRED') {
          return res.status(400).json({
              success: false,
              message: 'Order expired. Please create a new order.',
          });
      }
      res.status(500).json({
          success: false,
          message: 'Internal server error',
          error: error.message,
      });
  }
});

// Save Payment Details to Database
exports.verifyAndSavePayment = async (req, res, next) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields: razorpay_payment_id, razorpay_order_id, or razorpay_signature",
        });
    }
    const subscriptionId = user.subscription.id;
    // Optionally, verify the signature using Razorpay's library
    const generatedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_SECRET)
        .update(`${razorpay_payment_id}|${subscriptionId}`)
        .digest('hex');


    if (generatedSignature !== razorpay_signature) {
        return res.status(400).json({ success: false, message: "Payment verification failed" });
    }

    // Save payment details to the database
    const payment = await Payment.create({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
    });

    res.status(200).json({
        success: true,
        message: 'Payment verified successfully', payment
    });
}

exports.getRazorpayApiKey = async (_req, res, _next) => {
    res.status(200).json({
        success: true,
        key: process.env.RAZORPAY_KEY_ID,
    });
}

exports.allPayments=async(req,res,_next) => {
    const {count,skip}=req.query;

    const allPayments=await razorpay.subscriptions.all({
        count:count ? count : 10,
        skip: skip? skip : 0,
    })
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    
      const finalMonths = {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      };
      const monthlyWisePayments = allPayments.items.map((payment) => {
        const monthsInNumbers = new Date(payment.start_at * 1000);
    
        return monthNames[monthsInNumbers.getMonth()];
      });
    
      monthlyWisePayments.map((month) => {
        Object.keys(finalMonths).forEach((objMonth) => {
          if (month === objMonth) {
            finalMonths[month] += 1;
          }
        });
      });
    
      const monthlySalesRecord = [];
    
      Object.keys(finalMonths).forEach((monthName) => {
        monthlySalesRecord.push(finalMonths[monthName]);
      });
    
      res.status(200).json({
        success: true,
        message: 'All payments',
        allPayments,
        finalMonths,
        monthlySalesRecord,
      });
}