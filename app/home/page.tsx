"use client"; // This is a client component 👈🏽

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const Page = (props: Props) => {
  const { push } = useRouter();

  useEffect(() => {
    push("/weather");
  }, [push]);

  return <></>;
};

export default Page;
