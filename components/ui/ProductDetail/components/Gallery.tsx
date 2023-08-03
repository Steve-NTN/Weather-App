import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

type Props = {
  productDetail: any;
};

const Gallery = (props: Props) => {
  let { productDetail = {} } = props;
  let { galleries = [] } = productDetail;
  const [selectedImg, setSelectedImg] = useState({
    url: null
  });

  // XỬ LÝ CHỌN XEM ẢNH
  const onClickPreviewImg = (img: any) => {
    setSelectedImg(img);
  };

  // TỰ ĐỘNG CHỌN ẢNH ĐẦU TIÊN
  useEffect(() => {
    if (galleries.length > 0) {
      setSelectedImg(galleries[0]);
    }
  }, [galleries]);

  return (
    <div>
      <div className="w-full border p-3 md:p-4 rounded">
        {selectedImg?.url && (
          <img
            src={selectedImg?.url}
            alt="img"
            className="max-w-[100%] h-[200px] md:h-[350px] mx-auto"
          />
        )}
        {!selectedImg?.url && <Loading className="my-8"/>}
      </div>

      <div className="flex gap-2 flex-wrap my-3 md:my-4">
        {galleries.map((gallery: any, idx: number) => (
          <div
            key={idx}
            className="p-2 rounded w-[64px] w-[64px] cursor-pointer border"
            onClick={() => onClickPreviewImg(gallery)}
          >
            <img
              src={gallery?.url}
              alt="img"
              className="w-[100%] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
