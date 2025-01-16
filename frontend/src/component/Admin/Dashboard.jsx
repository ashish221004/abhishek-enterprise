import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line, Bar } from "react-chartjs-2";
// eslint-disable-next-line
// import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata.js";
import Loading from "../../more/Loader.js";
import { getAdminProduct } from "../../actions/ProductActions.js";
import { getAllOrders } from "../../actions/OrderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  ArcElement, 
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const [totalPayments, setTotalPayments] = useState(0);
  const [monthlySalesRecord, setMonthlySalesRecord] = useState([]);
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.AllOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    let isMounted = true;
    const fetchPaymentCount = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v2/allPayment",
          {
            withCredentials: true,
          }
        );
        setMonthlySalesRecord(data.monthlySalesRecord || []);
        setTotalPayments(data.allPayments.count || 0);
      } catch (error) {
        console.error("Error fetching total payments:", error);
      }
    };

    fetchPaymentCount();
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    return () => {
      isMounted = false; 
    };
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#3BB77E"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };
  const salesData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales / Month",
        data: monthlySalesRecord,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          <MetaData title="Dashboard" />
          <Sidebar />

          <div className="dashboardContainer">
            <Typography component="h1">Admin Dashboard</Typography>

            <div className="dashboardSummary">
              <div>
                <p>
                  Total Amount <br /> ${totalAmount}
                </p>
              </div>
              <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                  <p>Product</p>
                  <p>{products && products.length}</p>
                </Link>
                <Link to="/admin/payment">
                  <p>Payment</p>
                  <p>{totalPayments}</p>
                </Link>
                <Link to="/admin/orders">
                  <p>Orders</p>
                  <p>{orders && orders.length}</p>
                </Link>
                <Link to="/admin/users">
                  <p>Users</p>
                  <p>{users && users.length}</p>
                </Link>
              </div>
            </div>

            <div className="lineChart">
              <Line data={lineState} />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              {/* Left Side: Doughnut Chart */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="doughnutChart">
                  <Doughnut data={doughnutState} />
                </div>
              </div>

              {/* Right Side: Bar Chart and Total Payments */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="h-96 relative w-full">
                  {monthlySalesRecord.length > 0 ? (
                    <Bar className="h-80 w-full" data={salesData} />
                  ) : (
                    <p className="text-gray-500 text-center">
                      Loading chart data...
                    </p>
                  )}
                </div>
                {/* Total Payments */}
                <div className="text-lg font-medium text-gray-700 text-center md:text-left mt-3">
                  Total Payments:{" "}
                  <span className="text-blue-500 font-bold">
                    {totalPayments}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Dashboard;
