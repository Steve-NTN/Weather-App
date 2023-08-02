import { ReactNode } from "react";
import { GrClose } from "react-icons/gr";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (show: boolean) => void;
};

const Drawer = (props: Props) => {
  let { isOpen, children, setIsOpen } = props;

  return (
    <div
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-300 translate-x-0"
          : " transition-all delay-300 opacity-0 translate-x-full")
      }
    >
      {/* NỘI DUNG */}
      <section
        className={
          "w-[75%] max-w-[350px] right-0 absolute bg-white h-full shadow-xl delay-350 duration-300 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="relative flex flex-col overflow-y-scroll h-full">
          <div className="p-4 flex items-center justify-between border-b">
            <p className="font-bold text-lg">Giỏ hàng</p>
            <button
              className="rounded-full p-2 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <GrClose />
            </button>
          </div>
          {children}
        </div>
      </section>

      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default Drawer;
