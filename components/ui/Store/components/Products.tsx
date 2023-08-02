import Loading from "@/components/Loading";
import useProducts from "@/hooks/useProducts";
import "@/styles/Products.scss";
import { formatMoney } from "@/utils/stringHelpers";
import ChangeOrderQuantity from "./ChangeOrderQuantity";

type Props = {
  className?: string;
};

const Products = (props: Props) => {
  const { className } = props;
  const { products, loading, onClickProduct } = useProducts();

  return (
    <>
      <p className="text-xl font-bold my-6">Danh sách sản phẩm</p>
      {loading && <Loading className="my-7" />}
      {!loading && (
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
          {products?.map((product) => {
            let { id, name, img, description, price } = product;

            return (
              <div
                className="product-box"
                key={id}
                onClick={() => onClickProduct(product)}
              >
                <img src={img} className="img" />
                <div className="content">
                  <p className="name">{name}</p>
                  <p className="desc mt-2">{description}</p>

                  <div className="order-box flex items-center justify-between mt-2">
                    <p className="price text-sm">{formatMoney(price)}</p>
                    <ChangeOrderQuantity product={product} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
