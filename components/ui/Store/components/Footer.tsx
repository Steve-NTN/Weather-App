import "./Footer.scss";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
type Props = {};

const Footer = (props: Props) => {
  const currentTime = new Date();
  const companyOptions = [
    { label: "About", link: "/about" },
    { label: "Product", link: "/product" },
    { label: "blog", link: "/blog" },
  ];
  return (
    <div className="bg-slate-100 p-4">
      <div className="max-w-screen-xl grid md:grid-cols-4 sm:grid-cols-2 gap-4 mx-auto mb-4">
        <div>
          <p className="title">NTN Store</p>
          <div className="content">
            <p>{"NTN store - the best store"}</p>
          </div>
        </div>

        <div>
          <p className="title">Company</p>
          <div className="content">
            {companyOptions.map((companyOption) => (
              <p key={companyOption.link} className="option">
                {companyOption.label}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="title">Company</p>
          <div className="content">
            {companyOptions.map((companyOption) => (
              <p key={companyOption.link} className="option">
                {companyOption.label}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="title">Company</p>
          <div className="content">
            {companyOptions.map((companyOption) => (
              <p key={companyOption.link} className="option">
                {companyOption.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* PHẦN DƯỚI */}
      <div className="border-t pt-4 content flex justify-between">
        <p>© {currentTime.getFullYear()} NTN Store. All rights reserved.</p>
        <div className="flex gap-2 apps">
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
      </div>
    </div>
  );
};
export default Footer;
