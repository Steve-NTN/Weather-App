import "@/styles/Footer.scss";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
type Props = {};

const Footer = (props: Props) => {
  const { push } = useRouter();
  const currentTime = new Date();
  const companyOptions = [
    { label: "About", link: "/store" },
    { label: "Product", link: "/store" },
  ];

  const helpOptions = [{ label: "Contact us", link: "/store" }];

  const onClickLink = (link: string) => {
    push(link);
  };

  return (
    <StyledFooter className=" p-4">
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
            {companyOptions.map((option, idx) => (
              <p
                key={idx}
                className="option"
                onClick={() => onClickLink(option.link)}
              >
                {option.label}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="title">Help</p>
          <div className="content">
            {helpOptions.map((option, idx) => (
              <p
                key={idx}
                className="option"
                onClick={() => onClickLink(option.link)}
              >
                {option.label}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="title">Social</p>
          <div className="content">
            <div className="flex gap-2 apps">
              <AiFillFacebook />
              <p>Facebook</p>
            </div>

            <div className="flex gap-2 apps mt-2">
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>

      {/* PHẦN DƯỚI */}
      <div className="border-t pt-4 content">
        <p className="text-xs text-center">
          © {currentTime.getFullYear()} NTN Store. All rights reserved.
        </p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled(Box)({
  backgroundColor: "var(--app-color)",
  "p, svg": {
    color: "#fff",
  },
});
export default Footer;
