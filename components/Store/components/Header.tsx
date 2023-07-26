import * as React from "react";

export type IAppProps = {};

export default function Header(props: IAppProps) {
  return (
    <div className="p-4">
      <p className="font-bold text-3xl md:text-4xl">NTN Store</p>
    </div>
  );
}
