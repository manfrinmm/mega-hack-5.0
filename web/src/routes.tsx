import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import Success from "./pages/Success";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeLinker from "./pages/HomeLinker";
import Dashboards from "./pages/Dashboards";
import LifeTime from "./pages/LifeTime";
import Extract from "./pages/Extract";
import FlowResults from "./pages/FlowResults";
import CashManagement from "./pages/CashManagement";
import Integration from "./pages/Integration";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home-old" component={Landing} />
      <Route path="/home" component={HomeLinker} />
      <Route path="/dashboards" component={Dashboards} />
      <Route path="/cadastro" component={Register} />
      <Route path="/recuperar-senha" component={ForgotPassword} />
      <Route path="/registrar" component={TeacherForm} />
      <Route path="/tempo-vida" component={LifeTime} />
      <Route path="/extrato" component={Extract} />
      <Route path="/resultados" component={FlowResults} />
      <Route path="/integracao" component={Integration} />
      <Route path="/caixa" component={CashManagement} />

      <Route path="/success" component={Success} />
    </BrowserRouter>
  );
}

export default Routes;
