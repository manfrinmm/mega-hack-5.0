import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import LinkerPageHeader from "../../components/LinkerPageHeader";
import BubbleChart from "../../components/BubbleChart";
import Card from "../../components/Card";

import { Paper, Grid, Box } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import BarChartIcon from "@material-ui/icons/BarChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TableChartIcon from "@material-ui/icons/TableChart";
import HistoryIcon from "@material-ui/icons/History";

// import Chart from "chart.js";

import "./styles.css";
import Select from "../../components/Select";
import { toast } from "react-toastify";
import renderMessageError from "../../utils/renderMessageError";

interface ITransaction {
  id: number;
  name: string;
  value: number;
}

interface IBalance {
  gross_revenue: number;
  id: number;
  percentage_of_taxes: number;
  reference_month: string;
  total_spend: number;
  transactions: ITransaction[];
  transactions_gross_revenue: number;
  transactions_total_spend: number;
}

function Dashboards() {
  const [balance, setBalance] = useState<IBalance>();

  const [month, setMonth] = useState(String(new Date().getMonth() + 1));
  const [year, setYear] = useState(String(new Date().getFullYear()));

  const loadData = useCallback(
    async function () {
      try {
        const reference_month = `${month}/${year}`;

        const response = await api.get("/balances/transactions", {
          params: {
            reference_month,
            limit_transactions: 5,
          },
        });

        const balance_data = response.data as IBalance;

        setBalance(balance_data);
      } catch (error) {
        // toast.error(renderMessageError(error));
      }
    },
    [month, year],
  );

  console.log(month, "/", year);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div id="Dashboards">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/home"
        type="return"
      ></LinkerPageHeader>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection="column"
      >
        <Box width="90%" paddingBottom="3.2rem">
          <section className="basic-chart">
            <h2 className="dashboards-title">Visão geral</h2>
            <Box display="flex" justifyContent="space-around">
              <Select
                name="month"
                label=""
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                options={[
                  { value: "01", label: "Janeiro" },
                  { value: "02", label: "Fevereiro" },
                  { value: "03", label: "Março" },
                  { value: "04", label: "Abril" },
                  { value: "05", label: "Maio" },
                  { value: "06", label: "Junho" },
                  { value: "07", label: "Julho" },
                  { value: "08", label: "Agosto" },
                  { value: "09", label: "Setembro" },
                  { value: "10", label: "Outubro" },
                  { value: "11", label: "Novembro" },
                  { value: "12", label: "Dezembro" },
                ]}
              />
              <Select
                name="year"
                className="year"
                label=""
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                options={[
                  { value: "2020", label: "2020" },
                  { value: "2019", label: "2019" },
                  { value: "2018", label: "2018" },
                ]}
              />
            </Box>

            <div className="dashboards-chart-container">
              <BubbleChart
                revenue={balance?.gross_revenue || 0}
                cost={balance?.total_spend || 0}
              />
            </div>

            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              gridGap="16px"
            >
              <p className="dashboards-title">O gráfico acima representa:</p>
              <Card
                title="Entradas"
                color="green"
                value={balance?.gross_revenue || 0}
                size="medium"
              />
              <Card
                title="Saídas"
                color="red"
                value={balance?.total_spend || 0}
                size="medium"
              />
            </Box>
          </section>

          <section className="dashboards-container">
            <Link to="/extrato" className="button">
              Gerenciar Lançamentos
            </Link>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Link to={"/tempo-vida"}>
                  <Paper className="secondary-cards lifetime">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <HistoryIcon></HistoryIcon>
                    </Box>

                    <Box display="flex" flexDirection="column">
                      <b className="hint">Criar Cenário</b>
                    </Box>
                  </Paper>
                </Link>
              </Grid>

              <Grid item xs={6}>
                <Link to={"/caixa"}>
                  <Paper className="secondary-cards cash">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <TrendingUpIcon></TrendingUpIcon>
                    </Box>

                    <Box display="flex" flexDirection="column" textAlign="end">
                      <b className="hint white">Variação do Capital de Giro</b>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Link to={"/resultados"}>
                  <Paper className="secondary-cards results">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <BarChartIcon></BarChartIcon>
                    </Box>

                    <Box display="flex" flexDirection="column">
                      <b className="hint">Fluxo Resultado</b>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link to={"/integracao"}>
                  <Paper className="secondary-cards import">
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className="icon"
                    >
                      <TableChartIcon></TableChartIcon>
                    </Box>

                    <b className="hint">Importação Excel</b>
                  </Paper>
                </Link>
              </Grid>
            </Grid>
          </section>

          <section className="dashboards-recommendation">
            <h2 className="dashboards-title">Recomendações</h2>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className="primary-cards purple">
                  <p className="description purple">
                    Cursos de gestão gratuitos disponibilizados pela Sebrae
                  </p>

                  <Box justifyContent="flex-end" display="flex">
                    <span>Saiba mais</span>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className="primary-cards blue">
                  <p className="description blue">
                    Programa de aceleração abre vagas neste mês
                  </p>

                  <Box justifyContent="flex-end" display="flex">
                    <span>Saiba mais</span>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </section>

          <section className="dashboards-last-releases">
            <h2 className="dashboards-title">Últimos Lançamentos</h2>

            <Box
              display="flex"
              flexDirection="column-reverse"
              width="100%"
              gridGap="8px"
            >
              {balance?.transactions?.map((transaction) => (
                <Card
                  key={transaction.id}
                  title={transaction.name}
                  color={transaction.value > 0 ? "green" : "red"}
                  value={transaction.value}
                  date={`${month}/${year}`}
                  size="small"
                />
              ))}
            </Box>
          </section>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboards;
