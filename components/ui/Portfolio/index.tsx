import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Home,
  Skills,
} from "./components";
import "./index.scss";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
