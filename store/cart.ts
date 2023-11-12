import { CartProductType, CartType } from "@/types";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const setCartFunc = (cart = []) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState: CartType = {
  cart: [],
};

export const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state: any, action: any) => {
      const crtProduct = state.cart.find(
        (product: CartProductType) => product.id === action.payload.id
      );
      if (crtProduct)
        state.cart = state.cart.map((product: CartProductType) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }

      setCartFunc(state.cart);
    },
    decrement: (state: any, action: any) => {
      const crtProduct = state.cart.find(
        (product: CartProductType) => product.id === action.payload.id
      );
      if (crtProduct) {
        state.cart = state.cart
          .map((product: CartProductType) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product: CartProductType) => product.quantity > 0);
      }

      setCartFunc(state.cart);
    },
    setCart: (state: any, action: any) => {
      state.cart = action.payload;
    },
    removeItem: (state: any, action: any) => {
      state.cart = state.cart.filter(
        (item: CartProductType) => item.id !== action.payload.id
      );
      setCartFunc(state.cart);
    },
  },
});

const cartProducts = (state: RootState) => state.cartReducer.cart;

export const productQtyInCartSelector = createSelector(
  [cartProducts, (cartProducts, id: string) => id],
  (cartProducts, productId) =>
    cartProducts.find((product) => product.id === productId)?.quantity
);

export const totalCartProductsSelector = createSelector(
  [cartProducts],
  (cartProducts) =>
    cartProducts.reduce(
      (total: number, curr: CartProductType) => (total += curr.quantity),
      0
    )
);
export const TotalPriceSelector = createSelector(
  [cartProducts],
  (cartProducts) =>
    cartProducts.reduce(
      (total: number, curr: CartProductType) =>
        (total += curr.quantity * curr.price),
      0
    )
);

export const { increment, decrement, setCart, removeItem } = cartSlide.actions;
