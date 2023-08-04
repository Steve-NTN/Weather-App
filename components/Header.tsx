import Drawer from "@/components/Drawer";
import useHeader from "@/hooks/useHeader";
import { useAppSelector } from "@/store";
import { totalCartProductsSelector } from "@/store/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./ui/Store/components/Cart";

type Props = {
  hiddenCart?: boolean;
};

export default function Header(props: Props) {
  const { hiddenCart } = props;
  const totalProductQuantity = useAppSelector(totalCartProductsSelector);
  const { showCart, setshowCart, onClickCart, onClickLogo } = useHeader();

  return (
    <div className="p-4 gap-2 flex justify-between align-center border-b">
      <p className="font-bold text-3xl md:text-4xl cursor-pointer" onClick={onClickLogo}>
        NTN Store
      </p>

      {!hiddenCart && (
        <div className="flex align-center">
          <button
            className="relative p-2 hover:bg-gray-200 rounded-full"
            onClick={onClickCart}
          >
            <span className="absolute text-sm text-white top-0 right-0 bg-red-500 rounded-full w-4 h-4 font-mono">
              {totalProductQuantity}
            </span>
            <AiOutlineShoppingCart className="cursor-pointer text-2xl" />
          </button>
        </div>
      )}

      {/* GIỎ HÀNG */}
      <Drawer isOpen={showCart} setIsOpen={setshowCart}>
        <Cart />
      </Drawer>
    </div>
  );
}
