import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import api from "../../services/api";
import { toast } from "react-toastify";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./styles.css";

function Register() {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");

  const history = useHistory();

  async function handleSubmit() {
    try {
      await api.post(`/users`, {
        name,
        cnpj,
        email,
        password,
      });

      toast.success("Cadastro realizado com sucesso");

      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="page-register">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <ArrowBackIosIcon />
          </Link>
        </div>

        <div className="page-reister__content-header">
          <h2 className="page-register__content-header-title">
            Crie sua <br></br>conta agora
          </h2>

          <p className="page-register__content-header-description">
            Basta preencher esses dados <br></br> e você estará conosco.
          </p>
        </div>
      </header>

      <div className="page-register-main">
        <main>
          <h1 className="page-register-main__form-title">01. Quem é você? </h1>

          <fieldset>
            <Input
              name="name"
              label=""
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <Input
              name="cnpj"
              label=""
              type="text"
              placeholder="CNPJ"
              style={{ marginTop: -16 }}
              value={cnpj}
              onChange={(event) => {
                setCnpj(event.target.value);
              }}
            />
            <Input
              name="email"
              label=""
              type="text"
              placeholder="E-mail"
              style={{ marginTop: -16 }}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Input
              name="password"
              label=""
              type="password"
              placeholder="Senha"
              style={{ marginTop: -16 }}
              value={password}
              onChange={(event) => {
                setSenha(event.target.value);
              }}
            />
          </fieldset>
          <button type="button" onClick={handleSubmit}>
            Cadastrar
          </button>
        </main>
      </div>
    </div>
  );
}

export default Register;
