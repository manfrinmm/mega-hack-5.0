import React from "react";

import logoImg from "../../assets/images/startMoney.svg";
import "./styles.css";

function PageHeaderLogo() {
  return (
    <div id="logo-component">
      <img src={logoImg} alt="Logo" />
      <p>
        Cuidando da saúde financeira <br />
        da sua empresa
      </p>
    </div>
  );
}

export default PageHeaderLogo;
