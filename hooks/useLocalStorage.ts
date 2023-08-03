import { setCart } from "@/store/cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useLocalStorage = () => {
  const dispatch = useDispatch();

  const initCart = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart") || "[]")
        : [];
    }
    return [];
  };

  useEffect(() => {
    dispatch(setCart(initCart()));
  }, []);
};

export default useLocalStorage;
