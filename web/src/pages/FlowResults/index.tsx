import React from "react";

import LinkerPageHeader from "../../components/LinkerPageHeader";

import image from "../../assets/images/icons/description-result.svg";

import "./styles.css";
import ResultFlowGraph from "../../components/graphs/ResultFlowGraph";

function FlowResults() {
  return (
    <div id="FlowResults">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/dashboards"
        type="return"
      ></LinkerPageHeader>
      <h1 className="flowResults-title">Fluxo Resultados</h1>

      <ResultFlowGraph />

      <img src={image} alt="Fluxo resultados" className="image" />
    </div>
  );
}

export default FlowResults;
