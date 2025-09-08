import { create } from "zustand";
import axios from "axios";

const useAdminStore = create((set) => ({
  categories: [], // all categories
  products: [],
  loading: false,
  error: null,

  // Fetch categories
  fetchCategories: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axios.get(
        "http://localhost:4009/product/api/getcategory"
      );
      set({ categories: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // Add category
  addCategory: async (newCategory, token) => {
    try {
      set({ loading: true, error: null });
      const res = await axios.post(
        "http://localhost:4009/product/api/addcategory",
        newCategory,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // After adding, update local state also
      set((state) => ({
        categories: [...state.categories, res.data],
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  // Fetch products
  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axios.get(
        "http://localhost:4009/product/api/getProducts"
      );
      set({ products: res.data.getAllProducts, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // Add product
  addProduct: async (newProduct, token) => {
    try {
      set({ loading: true, error: null });
      const res = await axios.post(
        "http://localhost:4009/product/api/addProducts",
        newProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set((state) => ({
        products: [...state.products, res.data],
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  // Add this function to your adminStore.js

  // Delete product
  deleteProduct: async (productId, token) => {
    try {
      set({ loading: true, error: null });
      await axios.delete(
        `http://localhost:4009/product/api/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Remove product from local state
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useAdminStore;
