import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";
import MetaData from "../../more/Metadata";
function AllPayment() {
  const [payments, setPayments] = useState([]);

  // Fetch payments data
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v2/allPayment",
          {
            withCredentials: true,
          }
        );
        console.log(data)
        // Extract items array from the response
        setPayments(data.allPayments.items || []);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaData />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-64 bg-white shadow-sm ">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="bg-white">
            <div className="p-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0 text-center">
                  All Payment Records
                </h1>
              </div>

              {/* Table Container with horizontal scroll for mobile */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                        Payment ID
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {payments.length > 0 ? (
                      payments.map((payment) => (
                        <tr
                          key={payment.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {payment.id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {payment.user}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            ${payment.amount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${
                                payment.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : payment.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : payment.status === "failed"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                              }
                            `}
                            >
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {new Date(payment.date).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="px-6 py-8 text-center text-gray-500"
                        >
                          No payments found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPayment;
