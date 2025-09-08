import React, { useState, useEffect } from "react";
import { Plus, Image } from "lucide-react";
import useAdminStore from "../../store/adminStore";

const AddProducts = () => {
  const { categories, fetchCategories, addProduct, loading, error } =
    useAdminStore();

  // map categories to simple string array
  const categoryNames = categories.map((cat) => cat.categoryname);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 49.99,
      category: "Clothing",
      stock: 45,
    },
    {
      id: 2,
      name: "Designer Casual Hoodie",
      price: 89.99,
      category: "Clothing",
      stock: 32,
    },
    {
      id: 3,
      name: "Luxury Denim Jacket",
      price: 129.99,
      category: "Clothing",
      stock: 18,
    },
  ]);
  const [newProduct, setNewProduct] = useState({
    productname: "",
    price: "",
    productimage: null,
    discount: "",
    quantity: "",
    description: "",
    categoryid: "",
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem("token");
      
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('productname', newProduct.productname);
      formData.append('price', newProduct.price);
      formData.append('discount', newProduct.discount);
      formData.append('quantity', newProduct.quantity);
      formData.append('description', newProduct.description);
      formData.append('categoryid', newProduct.categoryid);
      
      if (newProduct.productimage) {
        formData.append('productimage', newProduct.productimage);
      }

      // Call the addProduct function from store with proper parameters
      await addProduct(formData, token);

      // Update local products state (optional - depends on your UI needs)
      const newProductWithId = {
        ...newProduct,
        id: products.length + 1,
        stock: parseInt(newProduct.quantity),
      };
      setProducts([...products, newProductWithId]);
      
      // Reset form
      setNewProduct({
        productname: "",
        price: "",
        productimage: null,
        discount: "",
        quantity: "",
        description: "",
        categoryid: "",
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({
      ...newProduct,
      productimage: file,
    });
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Debug: Log categories when they change
  useEffect(() => {
    console.log("Categories loaded:", categories);
  }, [categories]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100/50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}
      
      <form onSubmit={handleAddProduct} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={newProduct.productname}
              onChange={(e) =>
                setNewProduct({ ...newProduct, productname: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter product name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Discount (%)
            </label>
            <input
              type="number"
              value={newProduct.discount}
              onChange={(e) =>
                setNewProduct({ ...newProduct, discount: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter discount %"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter quantity"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={newProduct.categoryid}
              onChange={(e) =>
                setNewProduct({ ...newProduct, categoryid: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryname}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Image
            </label>
            <label 
              htmlFor="product-image-upload"
              className="flex items-center justify-center w-full h-12 border-2 border-dashed border-orange-200 rounded-xl cursor-pointer hover:bg-orange-50 transition-colors"
            >
              <Image className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-sm text-gray-500">
                {newProduct.productimage ? newProduct.productimage.name : "Upload Image"}
              </span>
              <input
                id="product-image-upload"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            rows={4}
            className="w-full px-4 py-2.5 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5" />
          <span>{loading ? 'Adding Product...' : 'Add Product'}</span>
        </button>
      </form>
    </div>
  );
};

export default AddProducts;