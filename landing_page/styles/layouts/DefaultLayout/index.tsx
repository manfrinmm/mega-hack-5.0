import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import { Wrapper } from "./styles";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default DefaultLayout;
