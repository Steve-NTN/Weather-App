import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/store";
import "@/styles/Cart.scss";
import ChangeOrderQuantity from "./ChangeOrderQuantity";
import { removeItem } from "@/store/cart";

type Props = {};

const Cart = (props: Props) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartReducer.cart);

  // XỬ LÝ THÊM VÀO GIỎ HÀNG
  const onClickRemoveItem = (product: any) => {
    dispatch(removeItem(product));
  };

  // XỬ LÝ KHI BẤM THANH TOÁN
  const onClickPayment = () => {
    push("/store/checkout");
  };

  return (
    <>
      <div className="p-4">
        {cartProducts.length < 1 && (
          <p className="text-center text-sm my-4">Giỏ hàng trống</p>
        )}

        {cartProducts.map((product, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between cart-product gap-2 mb-4 border-b pb-4"
          >
            <div className="flex gap-2">
              <img src={product?.img} alt="img" />
              <div>
                <p className="font-bold">{product.name}</p>
                <p className="text-sm">x{product.quantity}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <ChangeOrderQuantity product={product} />
              <button
                className="p-2 hover:bg-gray-200 rounded-full"
                onClick={() => onClickRemoveItem(product)}
              >
                <MdDelete className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartProducts.length > 0 && (
        <div className="sticky bottom-0 text-center">
          <button
            className="bg-black text-white p-2 text-sm rounded"
            onClick={onClickPayment}
          >
            Thanh toán
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
