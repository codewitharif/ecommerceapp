import React from "react";
import { Search } from "lucide-react";

const Orders = () => {
  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "Sarah Johnson",
      amount: "$149.99",
      status: "Delivered",
      date: "2 hours ago",
    },
    {
      id: "#ORD-002",
      customer: "Michael Chen",
      amount: "$89.99",
      status: "Processing",
      date: "5 hours ago",
    },
    {
      id: "#ORD-003",
      customer: "Emily Davis",
      amount: "$229.99",
      status: "Shipped",
      date: "1 day ago",
    },
    {
      id: "#ORD-004",
      customer: "John Martinez",
      amount: "$59.99",
      status: "Delivered",
      date: "2 days ago",
    },
  ];
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
            <option>All Status</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-orange-100">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Order ID
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Customer
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Amount
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Status
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Date
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-orange-100 hover:bg-orange-50 transition-colors"
              >
                <td className="py-3 px-4 font-medium">{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4 font-semibold">{order.amount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="py-3 px-4">
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
