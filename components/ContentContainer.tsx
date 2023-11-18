import { Container } from "@mui/material";

type Props = {
  children: string | JSX.Element | (string | JSX.Element)[];
  className?: string | undefined;
};

const ContentContainer = (props: Props) => {
  let { className, children } = props;
  return (
    <Container className={`mx-auto flex-1 ${className}`}>
      {children}
    </Container>
  );
};

export default ContentContainer;
