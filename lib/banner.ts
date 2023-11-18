import prisma from "./prisma";

export const getBanners = async () => {
  try {
    const banners = await prisma?.banner.findMany();

    return banners;
  } catch (error) {
    console.log(error);
  }
};
