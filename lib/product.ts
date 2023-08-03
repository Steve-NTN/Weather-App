import prisma from "./prisma";

export const getProductDetail = async (data: any = {}) => {
  try {
    let { id } = data;
    const productDetail = await prisma?.product.findUnique({
      where: {
        id: id,
      },
    });
    return { data: productDetail };
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
