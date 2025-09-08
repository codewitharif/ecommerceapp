import React from "react";
import {
  ArrowRight,
  Star,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const Overview = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,532",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "bg-blue-500",
    },
    {
      title: "Customers",
      value: "892",
      change: "+5.7%",
      trend: "up",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Products",
      value: "156",
      change: "-2.1%",
      trend: "down",
      icon: Package,
      color: "bg-orange-500",
    },
  ];
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

  const topProducts = [
    {
      name: "Premium Cotton T-Shirt",
      sales: 234,
      revenue: "$11,483",
      rating: 4.8,
    },
    {
      name: "Designer Casual Hoodie",
      sales: 189,
      revenue: "$16,983",
      rating: 4.9,
    },
    {
      name: "Luxury Denim Jacket",
      sales: 156,
      revenue: "$20,184",
      rating: 4.7,
    },
    {
      name: "Sports Performance Shorts",
      sales: 142,
      revenue: "$8,234",
      rating: 4.6,
    },
  ];

  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-sm font-semibold ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
            <button className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center">
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-orange-50 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-semibold text-gray-800">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{order.amount}</p>
                  <p
                    className={`text-sm ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Shipped"
                        ? "text-blue-600"
                        : "text-orange-600"
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Top Products</h2>
            <button className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center">
              View all <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-orange-50 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-semibold text-gray-800">{product.name}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500">
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    {product.revenue}
                  </p>
                  <p className="text-sm text-gray-600">{product.sales} sales</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Add Product",
              icon: Package,
              color: "bg-blue-500",
              action: () => setActiveTab("Add Products"),
            },
            {
              label: "View Orders",
              icon: ShoppingCart,
              color: "bg-green-500",
              action: () => setActiveTab("Orders"),
            },
            {
              label: "Customer Insights",
              icon: Users,
              color: "bg-purple-500",
            },
            {
              label: "Generate Report",
              icon: TrendingUp,
              color: "bg-orange-500",
            },
          ].map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex flex-col items-center p-4 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <div className={`p-3 rounded-xl ${action.color} mb-3`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overview;
