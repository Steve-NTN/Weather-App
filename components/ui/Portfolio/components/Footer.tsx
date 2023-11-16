import { Container, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  const onClickScrollTop = () => {
    window.scrollTo({ behavior: "smooth", top: 80 });
  };

  const onScrollTop = () => {
    let scrollTopBtn = document.getElementById("scroll_top_btn");
    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 224 ? "block" : "none";
    }
  };

  useEffect(() => {
    onScrollTop();
    window?.addEventListener("scroll", onScrollTop);

    return () => window.removeEventListener("scroll", onScrollTop);
  }, []);

  return (
    <StyledFooter className="section">
      <Typography className="author">Steve Nguyen</Typography>
      <Container>
        <Typography align="center">{'"Thanks for scrolling"'}</Typography>
      </Container>

      <StyledScrollTopBtn onClick={onClickScrollTop} id="scroll_top_btn">
        <AiOutlineArrowUp />
      </StyledScrollTopBtn>
    </StyledFooter>
  );
};

const StyledFooter = styled("div")({
  backgroundColor: "var(--app-bg1)",
  borderTop: "2px solid var(--app-color)",
  position: "relative",
  ".author": {
    position: "absolute",
    top: 0,
    right: "50%",
    backgroundColor: "var(--app-bg2)",
    padding: "4px 24px",
    borderRadius: 8,
    transform: "translate(50%, -50%)",
  },
  p: {
    color: "var(--app-color)",
    fontSize: 24,
    fontWeight: 700,
    margin: "0 auto",
  },
});

const StyledScrollTopBtn = styled(IconButton)({
  position: "fixed",
  bottom: 32,
  right: 32,
  backgroundColor: "var(--app-color) !important",
  color: "#fff",
});

export default Footer;
