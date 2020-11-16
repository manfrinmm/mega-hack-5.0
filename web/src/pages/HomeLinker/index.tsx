import React, { useState } from "react";
import { Link } from "react-router-dom";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import ReceiptTwoToneIcon from "@material-ui/icons/ReceiptTwoTone";
import LocalHospitalTwoToneIcon from "@material-ui/icons/LocalHospitalTwoTone";
import GetAppIcon from "@material-ui/icons/GetApp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import TimelineIcon from "@material-ui/icons/Timeline";

import "./styles.css";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div id="Home">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/home"
        type="topbar"
      ></LinkerPageHeader>

      <div className="home-container">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="primary-cards revenue">
              <Box
                display="flex"
                justifyContent="flex-end"
                className="icon"
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              >
                {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Box>

              <h4 className="label">
                Saldo <br />
                Disponível
              </h4>
              <h6 className="value">
                <b>R$</b> {isVisible ? "10.000,00" : "******"}
              </h6>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Link to={"/extrato"}>
              <Paper className="primary-cards extract">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <ReceiptTwoToneIcon></ReceiptTwoToneIcon>
                </Box>

                <h4 className="label">
                  Ver <br />
                  Extrato
                </h4>
              </Paper>
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Link to={"/dashboards"}>
              <Paper className="secondary-cards health">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <LocalHospitalTwoToneIcon></LocalHospitalTwoToneIcon>
                </Box>

                <Box display="flex" flexDirection="column">
                  <b className="hint">Saúde financeira</b>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    className="description"
                  >
                    <p>Ver os resultados completos</p>
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>

          <Grid item xs={6}>
            <Link to={"/integracao"}>
              <Paper className="secondary-cards integration">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <GetAppIcon></GetAppIcon>
                </Box>

                <Box display="flex" flexDirection="column" textAlign="end">
                  <b className="hint white">Importe seus dados</b>
                </Box>
              </Paper>
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Link to={"/home"}>
              <Paper className="secondary-cards classes disabled">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <LiveTvIcon></LiveTvIcon>
                </Box>

                <Box display="flex" flexDirection="column">
                  <b className="hint white">Cursos para você</b>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    className="description hint white"
                  >
                    <p>Trilha de educação financeira</p>
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to={"/tempo-vida"}>
              <Paper className="secondary-cards lifetime">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <TimelineIcon></TimelineIcon>
                </Box>

                <Box display="flex" flexDirection="column">
                  <b className="hint white">Criar Cenário</b>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    className="description hint white"
                  >
                    <p>Previsão do seu caixa futuro</p>
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Link to={"/home"}>
              <Paper className="secondary-cards pay disabled">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <AddShoppingCartIcon></AddShoppingCartIcon>
                </Box>

                <Box display="flex" flexDirection="column">
                  <b className="hint white">Registro Rápido</b>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    className="description hint white"
                  >
                    <p>Registre um Gasto</p>
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to={"/home"}>
              <Paper className="secondary-cards health disabled">
                <Box display="flex" justifyContent="flex-end" className="icon">
                  <AttachMoneyIcon></AttachMoneyIcon>
                </Box>

                <Box display="flex" flexDirection="column">
                  <b className="hint">Registro Rápido</b>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    className="description"
                  >
                    <p>Registre uma Receita</p>
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
