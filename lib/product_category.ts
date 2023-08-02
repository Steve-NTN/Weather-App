import prisma from "./prisma";

export const getAllProductCategories = async () => {
  try {
    const productCategories = await prisma?.product.findMany({
      select: {
        category: true,
      },
    });

    return productCategories;
  } catch (error) {
    console.log(error);
  }
};
