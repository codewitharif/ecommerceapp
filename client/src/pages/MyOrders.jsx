import React, { useState } from "react";
import {
  Search,
  Sparkles,
  ChevronDown,
  Bell,
  ArrowLeft,
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Star,
  Download,
  Eye,
  ArrowRight,
  Filter,
  Calendar,
  CreditCard,
} from "lucide-react";

const MyOrdersPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "ORD-12345",
      date: "15 Nov 2023",
      status: "delivered",
      items: [
        {
          id: 1,
          name: "Premium Cotton Blend T-Shirt",
          price: 49.99,
          quantity: 2,
          image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          rating: 4.8,
        },
        {
          id: 2,
          name: "Designer Casual Hoodie",
          price: 89.99,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          rating: 4.9,
        },
      ],
      total: 189.97,
      paymentMethod: "Credit Card",
      trackingNumber: "TRK-789456123",
      deliveryDate: "18 Nov 2023",
      address: "123 Fashion Street, Apt 4B, Trendy District, 10001",
    },
    {
      id: "ORD-12346",
      date: "12 Nov 2023",
      status: "shipped",
      items: [
        {
          id: 3,
          name: "Luxury Denim Jacket",
          price: 129.99,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          rating: 4.7,
        },
      ],
      total: 129.99,
      paymentMethod: "PayPal",
      trackingNumber: "TRK-321654987",
      estimatedDelivery: "20 Nov 2023",
      address: "123 Fashion Street, Apt 4B, Trendy District, 10001",
    },
    {
      id: "ORD-12347",
      date: "10 Nov 2023",
      status: "processing",
      items: [
        {
          id: 4,
          name: "Sports Performance Shorts",
          price: 39.99,
          quantity: 3,
          image:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          rating: 4.6,
        },
      ],
      total: 119.97,
      paymentMethod: "Credit Card",
      address: "123 Fashion Street, Apt 4B, Trendy District, 10001",
    },
    {
      id: "ORD-12348",
      date: "5 Nov 2023",
      status: "cancelled",
      items: [
        {
          id: 5,
          name: "Designer Sunglasses",
          price: 89.99,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          rating: 4.5,
        },
      ],
      total: 89.99,
      paymentMethod: "Credit Card",
      address: "123 Fashion Street, Apt 4B, Trendy District, 10001",
      cancellationReason: "Changed mind",
    },
  ];

  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "shipped":
        return <Truck className="w-5 h-5 text-blue-500" />;
      case "processing":
        return <Package className="w-5 h-5 text-orange-500" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "shipped":
        return "Shipped";
      case "processing":
        return "Processing";
      case "cancelled":
        return "Cancelled";
      default:
        return "Pending";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-orange-100 text-orange-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const OrderDetailsModal = ({ order, onClose }) => {
    if (!order) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <XCircle className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-semibold text-gray-800">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-semibold text-gray-800">{order.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-semibold text-xl text-gray-800">
                  ${order.total.toFixed(2)}
                </p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {getStatusText(order.status)}
                </span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Delivery Address
                </h3>
                <p className="text-gray-600">{order.address}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Payment Method
                </h3>
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">{order.paymentMethod}</span>
                </div>
              </div>
            </div>

            {order.trackingNumber && (
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Tracking Information
                </h3>
                <p className="text-blue-600">
                  Tracking Number: {order.trackingNumber}
                </p>
                {order.estimatedDelivery && (
                  <p className="text-gray-600 mt-1">
                    Estimated Delivery: {order.estimatedDelivery}
                  </p>
                )}
                {order.deliveryDate && (
                  <p className="text-gray-600 mt-1">
                    Delivered on: {order.deliveryDate}
                  </p>
                )}
              </div>
            )}

            {order.status === "cancelled" && order.cancellationReason && (
              <div className="bg-red-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Cancellation Reason
                </h3>
                <p className="text-red-600">{order.cancellationReason}</p>
              </div>
            )}

            {/* Order Items */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b border-gray-200 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">
                          ({item.rating})
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800">${order.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-800">$0.00</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-800">
                  ${(order.total * 0.08).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="font-semibold text-gray-800">Total</span>
                <span className="font-bold text-xl text-gray-800">
                  ${(order.total * 1.08).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl flex justify-end space-x-3">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50">
              <Download className="w-4 h-4 inline mr-2" />
              Download Invoice
            </button>
            {order.status === "delivered" && (
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold">
                Write a Review
              </button>
            )}
            {order.status === "shipped" && (
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold">
                Track Order
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100 p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-orange-50 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                StyleHub
              </h1>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your orders..."
                className="w-full pl-10 pr-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-orange-50 transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">JS</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-gray-800">John Smith</p>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
            <p className="text-gray-600 mt-2">
              Track, return, or buy things again
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2.5 border border-orange-200 text-gray-700 rounded-xl hover:bg-orange-50 transition-colors flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            <button className="px-4 py-2.5 border border-orange-200 text-gray-700 rounded-xl hover:bg-orange-50 transition-colors flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Date
            </button>
          </div>
        </div>

        {/* Orders Tabs */}
        <div className="bg-white rounded-2xl shadow-md p-2 mb-8 flex border border-orange-100/50">
          {[
            { id: "all", label: "All Orders" },
            { id: "processing", label: "Processing" },
            { id: "shipped", label: "Shipped" },
            { id: "delivered", label: "Delivered" },
            { id: "cancelled", label: "Cancelled" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-orange-100/50">
            <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              {activeTab === "all"
                ? "You haven't placed any orders yet."
                : `You don't have any ${activeTab} orders.`}
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-orange-500/30 flex items-center mx-auto">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100/50"
              >
                {/* Order Header */}
                <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(order.status)}
                    <div>
                      <p className="text-sm text-gray-500">Order Placed</p>
                      <p className="font-semibold text-gray-800">
                        {order.date}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-semibold text-xl text-gray-800">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order #</p>
                    <p className="font-semibold text-gray-800">{order.id}</p>
                  </div>
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="flex overflow-x-auto pb-4 space-x-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex-shrink-0 w-20">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <p className="text-gray-600">
                      {order.items.length} item
                      {order.items.length > 1 ? "s" : ""}
                    </p>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-orange-500/30 flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Order Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default MyOrdersPage;
