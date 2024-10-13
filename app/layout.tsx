import { Inter } from "next/font/google";
import "@/styles/main.scss";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Provider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NTN App",
  description: "NTN App 2023",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export default RootLayout;
