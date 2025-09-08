import React, { useState, useEffect } from "react";
import { Tag, Trash2, Edit } from "lucide-react";
import useAdminStore from "../../store/adminStore";

const ProductCategories = () => {
  const { categories, fetchCategories, addCategory, loading, error } =
    useAdminStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const categoryName = formData.get("categoryName");
    const token = localStorage.getItem("token");

    if (!categoryName) return;
    

    await addCategory({
      categoryname: categoryName,
      description: categoryName,
    }, token);

    e.target.reset();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Category
        </h2>
        <form onSubmit={handleAddCategory} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name
            </label>
            <input
              name="categoryName"
              type="text"
              className="w-full px-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter category name"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-orange-500/30"
          >
            <Tag className="w-5 h-5" />
            <span>{loading ? "Adding..." : "Add Category"}</span>
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Existing Categories
        </h2>
        {loading && <p>Loading...</p>}
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-orange-50 rounded-lg"
            >
              <span className="font-medium">{category.categoryname}</span>
              <div className="flex items-center space-x-2">
                <button className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
