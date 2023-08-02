import { BsFillCartPlusFill } from "react-icons/bs";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, productQtyInCartSelector } from "@/store/cart";
import { ProductType } from "@/types";

type Props = {
  product: ProductType;
};

const ChangeOrderQuantity = (props: Props) => {
  const dispatch = useAppDispatch();
  const { product } = props;

  // XỬ LÝ THÊM VÀO GIỎ HÀNG
  const onClickAddToCart = (product: any) => {
    dispatch(increment(product));
  };

  // XỬ LÝ TRỪ SP
  const onClickDecreamentProduct = (product: any) => {
    dispatch(decrement(product));
  };

  // SỐ LƯỢNG SẢN PHẨM TRONG GIỎ
  const productQlt =
    useAppSelector((state) => productQtyInCartSelector(state, product.id)) || 0;

  const buttonStyle = "p-2 hover:bg-gray-200 rounded-full";
  const iconStyle = "w-[24px] h-[24px]";

  return (
    <div className="flex items-center gap-2">
      {productQlt > 0 ? (
        <>
          <button
            className={buttonStyle}
            onClick={() => onClickAddToCart(product)}
          >
            <IoIosAddCircle className={iconStyle} />
          </button>
          <span>{productQlt}</span>
          <button
            className={buttonStyle}
            onClick={() => onClickDecreamentProduct(product)}
          >
            <IoIosRemoveCircle className={iconStyle} />
          </button>
        </>
      ) : (
        <button
          className={buttonStyle}
          onClick={() => onClickAddToCart(product)}
        >
          <BsFillCartPlusFill className={iconStyle} />
        </button>
      )}
    </div>
  );
};

export default ChangeOrderQuantity;
