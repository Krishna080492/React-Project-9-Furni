// first u have to install npm i react-redux @reduxjs/toolkit

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/productsData";

const initialState = {
  products: products, //products came from data-productsData
  cart: [], //cart na data array format ma store thase
  netTotal: 0, //grandTotal initial state ma 0
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // data add in cart
    addToCart: (state, action) => {
      state.cart.push(action.payload); //quantity product data ma add hoy tyare
      // or quantity product data ma nai bnavyu hoy tyare
      // let product = { ...action.payload, quantity: 1 };
      // state.cart.push(product);
    },
    // data delete from the cart
    removeToCart: (state, action) => {
      state.cart = state.cart.filter((product) => {
        product.id !== action.payload;
      });
    },
    // product increament in cart
    incrementProduct: (state, action) => {
      state.cart[action.payload].quantity += 1;
    },
    // product decrement in cart
    decrementProduct: (state, action) => {
      if (state.cart[action.payload].quantity > 1) {
        state.cart[action.payload].quantity -= 1;
        return;
      } else {
        state.cart.splice(action.payload, 1); //qty 1 thi decrease thai to cart mathi remove thai
      }
    },
  },
});

export const { addToCart, removeToCart, incrementProduct, decrementProduct } =
  ProductSlice.actions;

export default ProductSlice.reducer;
