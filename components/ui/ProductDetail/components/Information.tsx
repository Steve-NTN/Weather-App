import ProductDetail from "..";
import ChangeOrderQuantity from "../../Store/components/ChangeOrderQuantity";

type Props = {
  productDetail: any;
};

const Information = (props: Props) => {
  let { productDetail } = props;
  let { name, category, description } = productDetail;
  return (
    <div>
      <p className="text-xl font-bold">{name}</p>
      <p className="my-4">{category}</p>
      <p>{description}</p>

      <ChangeOrderQuantity product={productDetail} />
    </div>
  );
};

export default Information;
