import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import PageHeaderLogo from "../../components/PageHeaderLogo";

import heartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import { useAuth } from "../../hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const history = useHistory();

  async function handleSubmit() {
    try {
      await signIn({
        email,
        password,
      });

      history.push("/home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="page-login">
      <PageHeaderLogo />
      <div className="page-login-main">
        <main>
          <div className="title">
            <h1>Fazer login</h1>
            <Link className="action" to="/cadastro">
              Criar uma conta
            </Link>
          </div>
          <fieldset>
            <Input
              name="email"
              label=""
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => {
                const { value } = event.target;

                setEmail(value);
              }}
            />
            <Input
              name="password"
              label=""
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => {
                const { value } = event.target;

                setPassword(value);
              }}
            />
          </fieldset>
          <div className="remember-container">
            <input type="checkbox" name="rememberCheck" id="rememberCheck" />
            <label>Lembrar-me</label>
            <Link
              to="/recuperar-senha"
              className="buttonForget"
              style={{ textDecoration: "none" }}
            >
              Esqueci minha senha
            </Link>
          </div>
          {/* <Link to="/home" id="buttonSignin"> */}
          <button id="buttonSignin" onClick={handleSubmit}>
            Entrar
          </button>
          {/* </Link> */}
          <footer>
            <span>
              Feito com
              <img src={heartIcon} alt="heart icon" />
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Login;
