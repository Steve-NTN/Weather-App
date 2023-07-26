import { Footer, Header } from "./components";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <div className="p-4 text-center">Store nef</div>

      <Footer />
    </div>
  );
}
