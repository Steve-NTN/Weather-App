import ProductDetail from "..";
import ChangeOrderQuantity from "../../Store/components/ChangeOrderQuantity";

type Props = {
  productDetail: any;
};

const Information = (props: Props) => {
  let {
    productDetail: { name, category, description },
  } = props;
  return (
    <div>
      <p className="text-xl font-bold">{name}</p>
      <p className="my-4">{category}</p>
      <p>{description}</p>

      <ChangeOrderQuantity product={ProductDetail} />
    </div>
  );
};

export default Information;
