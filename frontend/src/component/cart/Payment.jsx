// import React, {useEffect, useRef } from "react";
// import CheckoutSteps from "./CheckoutSteps";
// import { useSelector, useDispatch } from "react-redux";
// import MetaData from "../../more/Metadata";
// import { Typography } from "@material-ui/core";
// import {
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";
// import "./payment.css";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
// import EventIcon from "@material-ui/icons/Event";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import { createOrder, clearErrors } from "../../actions/OrderAction";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loading from "../../more/Loader";

// const Payment = ({ history }) => {
//   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

//   const dispatch = useDispatch();
//   const stripe = useStripe();
//   const elements = useElements();
//   const payBtn = useRef(null);

//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { error,loading } = useSelector((state) => state.order);

//   const paymentData = {
//     amount: Math.round(orderInfo.totalPrice * 100),
//   };

//   const order = {
//     shippingInfo,
//     orderItems: cartItems,
//     itemsPrice: orderInfo.subtotal,
//     shippingPrice: orderInfo.shippingCharges,
//     totalPrice: orderInfo.totalPrice,
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     payBtn.current.disabled = true;

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/v2/payment/process",
//         paymentData,
//         config
//       );

//       const client_secret = data.client_secret;

//       if (!stripe || !elements) return;

//       const result = await stripe.confirmCardPayment(client_secret, {
//         payment_method: {
//           card: elements.getElement(CardNumberElement),
//           billing_details: {
//             name: user.name,
//             email: user.email,
//             address: {
//               line1: shippingInfo.address,
//               city: shippingInfo.city,
//               state: shippingInfo.state,
//               country: shippingInfo.country,
//             },
//           },
//         },
//       });

//       if (result.error) {
//         payBtn.current.disabled = false;

//         toast.error(result.error.message);
//       } else {
//         if (result.paymentIntent.status === "succeeded") {
//           order.paymentInfo = {
//             id: result.paymentIntent.id,
//             status: result.paymentIntent.status,
//           };

//           dispatch(createOrder(order));

//           history.push("/success");
//         } else {
//           toast.error("There's some issue while processing payment ");
//         }
//       }
//     } catch (error) {
//       payBtn.current.disabled = false;
//       toast.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, toast]);

//   return (
//    <>
//    {loading ? (
//      <Loading />
//    ) : (
//     <>
//     <MetaData title="Payment" />
//     <CheckoutSteps activeStep={2} />
//     <div className="paymentContainer">
//       <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
//         <Typography>Card Info</Typography>
//         <div>
//           <CreditCardIcon />
//           <CardNumberElement className="paymentInput" />
//         </div>
//         <div>
//           <EventIcon />
//           <CardExpiryElement className="paymentInput" />
//         </div>
//         <div>
//           <VpnKeyIcon />
//           <CardCvcElement className="paymentInput" />
//         </div>

//         <input
//           type="submit"
//           value={`Pay - $ ${orderInfo && orderInfo.totalPrice}`}
//           ref={payBtn}
//           className="paymentFormBtn"
//         />
//       </form>
//     </div>
//     <ToastContainer
//      position="bottom-center"
//      autoClose={5000}
//      hideProgressBar={false}
//      newestOnTop={false}
//      closeOnClick
//      rtl={false}
//      pauseOnFocusLoss
//      draggable
//      pauseOnHover
//      />
//   </>
//    )}
//    </>
//   );
// };

// export default Payment;
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createOrder } from "../../actions/OrderAction";
import MetaData from "../../more/Metadata";
import CheckoutSteps from "./CheckoutSteps";

const Payment = ({ history }) => {
  const [razorpayKey, setRazorpayKey] = useState(null);
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchRazorpayKey = async () => {
      try {
        const response = await axios.get("/api/v2/razorpay-key");
        if (response.data.success) {
          setRazorpayKey(response.data.key);
        } else {
          toast.error("Failed to fetch Razorpay API key");
        }
      } catch (error) {
        toast.error("Error fetching Razorpay API key");
      }
    };
    const loadRazorpayScript = async () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => {
          console.log("Razorpay script loaded successfully");
          resolve(true);
        };
        script.onerror = () => {
          console.error("Failed to load Razorpay script");
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
    fetchRazorpayKey();
  }, []);

  const handleUPIPayment = async () => {
    try {
      if (!window.Razorpay) {
        toast.error("Payment gateway is not loaded. Please refresh the page.");
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const amount = Math.round(orderInfo?.totalPrice * 100);
      
      console.log("Initiating payment for amount:", amount);

      const { data } = await axios.post(
        "http://localhost:4000/api/v2/payment/process",
        { amount },
        config
      );

      if (!data.success || !data.order_id) {
        console.error("Order creation failed:", data);
        toast.error(data.message || "Order creation failed");
        return;
      }

      console.log("Order created:", data);

      // Initialize Razorpay payment
      const options = {
        key: razorpayKey,
        amount: data.amount,
        currency: data.currency,
        order_id: data.order_id,
        name: "Abhishek-Enterprises",
        description: "welcome to my company",
        image:"./Assets/ecom-logo.png",
        
        handler: async function (response) {
          try {
            console.log("Payment success response:", response);
            // Verify payment
            const verifyData = await axios.post("/api/v2/verify", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyData.data.success) {
              const orderData = {
                paymentInfo: {
                  id: response.razorpay_payment_id,
                  status: "succeeded",
                },
              };
              dispatch(createOrder(orderData));
              history.push("/success");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: user?.name,
          email: user.email,
        },
        theme: {
          color: "#121212",
        },
        modal: {
          ondismiss: function() {
            toast.info("Payment cancelled");
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      
      razorpay.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        toast.error(`Payment failed: ${response.error.description}`);
      });

      razorpay.open();
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error(error.response?.data?.message || "Payment initialization failed");
    }
  };

  // Rest of your component JSX remains the same
  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
         <MetaData title="Payment" />
         <CheckoutSteps activeStep={2} />
     
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Choose Payment Method
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-lg text-gray-600">Amount to Pay:</span>
                <span className="ml-2 text-2xl font-bold text-gray-900">
                  ₹{orderInfo?.totalPrice || 0}
                </span>
              </div>

              <button
                onClick={handleUPIPayment}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Pay via UPI
              </button>

              <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
                <svg
                  className="h-4 w-4 text-gray-400 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Payment
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
  
  </div>
  );
};

export default Payment;


