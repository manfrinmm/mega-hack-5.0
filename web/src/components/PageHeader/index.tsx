import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
  to: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to={props.to}>
          <img className="top-bar-icon-back" src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Renata Reis" />
      </div>

      <div className="header-content">
        <strong dangerouslySetInnerHTML={{ __html: props.title }}></strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
