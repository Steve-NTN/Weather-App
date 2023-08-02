import { useAppSelector } from "@/store";
import { totalCartProductsSelector } from "@/store/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

export type IAppProps = {};

export default function Header(props: IAppProps) {
  const totalProductQuantity = useAppSelector(totalCartProductsSelector);

  return (
    <div className="p-4 gap-2 flex justify-between align-center border-b">
      <p className="font-bold text-3xl md:text-4xl">NTN Store</p>

      <div className="flex align-center">
        <button className="relative p-2 hover:bg-gray-200 rounded-full">
          <span className="absolute text-sm text-white top-0 right-0 bg-red-500 rounded-full w-4 h-4 font-mono">
            {totalProductQuantity}
          </span>
          <AiOutlineShoppingCart className="cursor-pointer text-2xl" />
        </button>
      </div>


    </div>
  );
}
