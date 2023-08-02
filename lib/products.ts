import prisma from "./prisma";

export const createProduct = async (data: {
  name: string;
  description: string;
  img: string;
  category: string;
  price: number;
}) => {
  let nowTime = new Date();
  let { name, description, img, category, price } = data;
  const product = await prisma.product.create({
    data: {
      name,
      description,
      img,
      category,
      price,
      createdAt: nowTime,
      updatedAt: nowTime,
    },
  });
  return product;
};

export const getAllProduct = async (data: any = {}) => {
  try {
    let { category, searchKey } = data;
    const products = await prisma.product.findMany({
      orderBy: [{ price: "asc" }, { name: "asc" }],
      where: {
        ...(searchKey
          ? {
              name: {
                contains: data.searchKey,
              },
            }
          : {}),
        ...(category ? { category } : {}),
      },
    });

    return products;
  } catch (error) {
    console.log(error);
  }
};
