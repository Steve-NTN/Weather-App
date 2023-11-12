import LoadingProvider from "@/providers/LoadingProvider";
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
import NotifyProvider from "@/providers/NotifyProvider";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <LoadingProvider>
      <NotifyProvider>
        <Header />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </NotifyProvider>
    </LoadingProvider>
  );
};

export default Portfolio;
