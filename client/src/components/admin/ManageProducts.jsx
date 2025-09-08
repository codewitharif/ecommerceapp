import React, { useState, useEffect } from "react";
import { Search, Filter, Package, Edit, Trash2, Loader } from "lucide-react";
import useAdminStore from "../../store/adminStore";

const ManageProducts = () => {
  const {
    products,
    categories,
    fetchProducts,
    fetchCategories,
    deleteProduct,
    loading,
    error,
  } = useAdminStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.productname
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.categoryid === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get category name by ID
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? category.categoryname : "Unknown";
  };

  const handleDeleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    // TODO: Implement delete functionality in your store
    console.log("Delete product with ID:", id);
    await deleteProduct(id, token);
    // You'll need to add a deleteProduct function to your adminStore
  };

  const handleEditProduct = (product) => {
    // TODO: Implement edit functionality
    console.log("Edit product:", product);
    // You can navigate to an edit page or open a modal
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
        <div className="flex items-center justify-center py-12">
          <Loader className="w-8 h-8 animate-spin text-orange-500" />
          <span className="ml-3 text-gray-600">Loading products...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Products</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryname}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No products found</p>
          <p className="text-gray-400 text-sm">
            {searchTerm || selectedCategory !== "all"
              ? "Try adjusting your search or filter criteria"
              : "Add your first product to get started"}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-orange-100">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Product
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Category
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Price
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Stock
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-orange-100 hover:bg-orange-50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {product.productimage ? (
                        <div className="w-10 h-10 rounded-lg overflow-hidden mr-3">
                          <img
                            src={product.productimage}
                            alt={product.productname}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <Package className="w-5 h-5 text-orange-500" />
                        </div>
                      )}
                      <div>
                        <span className="font-medium block">
                          {product.productname}
                        </span>
                        {product.description && (
                          <span className="text-sm text-gray-500 truncate max-w-xs block">
                            {product.description.substring(0, 50)}
                            {product.description.length > 50 && "..."}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {getCategoryName(product.categoryid)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-semibold">${product.price}</span>
                      {product.discount && product.discount > 0 && (
                        <span className="text-sm text-green-600">
                          {product.discount}% off
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={
                        product.quantity > 20
                          ? "text-green-600 font-medium"
                          : product.quantity > 5
                          ? "text-yellow-600 font-medium"
                          : "text-red-600 font-medium"
                      }
                    >
                      {product.quantity} in stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit product"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
