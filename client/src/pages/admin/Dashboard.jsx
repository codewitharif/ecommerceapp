import React, { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  DollarSign,
  Package,
  TrendingUp,
  Search,
  Bell,
  ChevronDown,
  Star,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Plus,
  Edit,
  List,
  Filter,
  Trash2,
  Image,
  Tag,
} from "lucide-react";
import Orders from "../../components/admin/Orders";
import ProductCategories from "../../components/admin/ProductCategories";
import ManageProducts from "../../components/admin/ManageProducts";
import AddProducts from "../../components/admin/AddProducts";
import Overview from "../../components/admin/Overview";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;

      case "Add Products":
        return <AddProducts />;

      case "Manage Products":
        return <ManageProducts />;

      case "Add Categories":
        return <ProductCategories />;

      case "Orders":
        return <Orders />;

      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`
          fixed lg:static w-64 bg-white shadow-xl min-h-screen transform transition-transform duration-300 z-40
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
        >
          <div className="p-6 border-b border-orange-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                StyleHub
              </h1>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {[
              "overview",
              "Add Products",
              "Manage Products",
              "Add Categories",
              "Orders",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {item === "overview" && <LayoutDashboard className="w-5 h-5" />}
                {item === "Add Products" && <Plus className="w-5 h-5" />}
                {item === "Manage Products" && <List className="w-5 h-5" />}
                {item === "Add Categories" && <Tag className="w-5 h-5" />}
                {item === "Orders" && <ShoppingCart className="w-5 h-5" />}
                <span className="capitalize">{item}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-orange-100 p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 capitalize">
                {activeTab}
              </h2>

              <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <button className="p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <Bell className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AD</span>
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-semibold text-gray-800">Admin User</p>
                    <p className="text-sm text-gray-500">Administrator</p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-4 lg:p-6">{renderTabContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
