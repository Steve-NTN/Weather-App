"use client";

import Page from "./(routes)/home/page";
import { withTranslation, useTranslation } from "react-i18next";

const Home = () => {
  return (
    <main>
      <Page />
    </main>
  );
};

export default withTranslation()(Home);
