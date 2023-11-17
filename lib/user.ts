import prisma from "./prisma";

export const signup = async (data: {
  username: string;
  fullname: string;
  password: string;
  img: string;
}) => {
  let nowTime = new Date();
  let { username, fullname, img, password } = data;
  const user = await prisma.user.create({
    data: {
      username,
      fullname,
      img,
      password,
      createdAt: nowTime,
    },
  });
  return user;
};

export const checkgetUserDetail = async (id: string) => {
  const result = await prisma.user.findFirst({
    where: { id },
  });
  return result;
};


export const checkUserExist = async (username: string) => {
  const result = await prisma.user.findFirst({
    where: { username },
  });
  return result;
};
