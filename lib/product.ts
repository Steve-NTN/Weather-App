import prisma from "./prisma";

export const getProductDetail = async (data: any = {}) => {
  try {
    let { id } = data;
    let productDetail = await prisma?.product.findUnique({
      where: {
        id: id,
      },
    });
    let formatProductDetail = {
      ...productDetail,
      galleries: [{ url: productDetail?.img }],
    };
    return { data: formatProductDetail };
  } catch (error) {
    console.log(error);
    return {
      error: {
        code: 404,
        msg: "ID not found",
      },
    };
  }
};
