// first u have to install npm i react-redux @reduxjs/toolkit

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/productsData";

const initialState = {
  products: products, //products came from data-productsData
  cart: [], //cart na data array format ma store thase
  grandTotal: 0, //grandTotal initial state ma 0
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // data add in cart
    addToCart: (state, action) => {
      let index = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index === -1) {
        state.cart.push(action.payload); //quantity product data ma add hoy tyare
        // or quantity product data ma nai bnavyu hoy tyare
        // let product = { ...action.payload, quantity: 1 };
        // state.cart.push(product);
      } else {
        state.cart[index].quantity++;
      }
    },
    // data delete from the cart
    removeToCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    // product increament in cart
    incrementProduct: (state, action) => {
      state.cart[action.payload].quantity += 1;
      // state.cart = state.cart.filter((product) => {
      //   if (product.id === action.payload) {
      //     product.quantity += 1;
      //   }
      //   return product;
      // });
    },
    // product decrement in cart
    decrementProduct: (state, action) => {
      if (state.cart[action.payload].quantity > 1) {
        state.cart[action.payload].quantity -= 1;
        return;
      } else {
        state.cart.splice(action.payload, 1); //qty 1 thi decrease thai to cart mathi remove thai
      }
      // state.cart = state.cart.filter((product) => {
      //   if (product.id === action.payload) {
      //     product.quantity -= 1;
      //   }
      //   return product;
      // });
    },

    // net total
    getGrandTotal: (state, action) => {
      let grandTotal = 0;
      state.cart.map((item, index) => {
        let total = item.price * item.quantity;
        grandTotal += total;
      });
      state.grandTotal = grandTotal;
    },
  },
});

export const { addToCart, removeToCart, incrementProduct, decrementProduct, getGrandTotal } =
  ProductSlice.actions;

export default ProductSlice.reducer;
