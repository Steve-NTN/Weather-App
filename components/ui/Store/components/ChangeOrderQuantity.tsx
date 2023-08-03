import { BsFillCartPlusFill } from "react-icons/bs";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, productQtyInCartSelector } from "@/store/cart";
import { CartProductType, ProductType } from "@/types";

type Props = {
  product?: CartProductType | ProductType | any;
};

const ChangeOrderQuantity = (props: Props) => {
  const dispatch = useAppDispatch();
  const { product } = props;

  // XỬ LÝ THÊM VÀO GIỎ HÀNG
  const onClickAddToCart = (e: any, product: any) => {
    e?.stopPropagation();
    dispatch(increment(product));
  };

  // XỬ LÝ TRỪ SP
  const onClickDecreamentProduct = (e: any, product: any) => {
    e?.stopPropagation();
    dispatch(decrement(product));
  };

  // SỐ LƯỢNG SẢN PHẨM TRONG GIỎ
  const productQlt =
    useAppSelector((state) =>
      productQtyInCartSelector(state, product?.id || "")
    ) || 0;

  const buttonStyle = "p-2 hover:bg-gray-200 rounded-full";
  const iconStyle = "w-[24px] h-[24px]";

  return (
    <div className="flex items-center">
      {productQlt > 0 ? (
        <>
          <button
            className={buttonStyle}
            onClick={(e) => onClickAddToCart(e, product)}
          >
            <IoIosAddCircle className={iconStyle} />
          </button>
          <span>{productQlt}</span>
          <button
            className={buttonStyle}
            onClick={(e) => onClickDecreamentProduct(e, product)}
          >
            <IoIosRemoveCircle className={iconStyle} />
          </button>
        </>
      ) : (
        <button
          className={buttonStyle}
          onClick={(e) => onClickAddToCart(e, product)}
        >
          <BsFillCartPlusFill className={iconStyle} />
        </button>
      )}
    </div>
  );
};

export default ChangeOrderQuantity;
