import { Box } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import api from "../../services/api";
import renderMessageError from "../../utils/renderMessageError";
import image from "../../assets/images/icons/description-lifetime.svg";
import "./styles.css";

interface IBalance {
  id: number;
  gross_revenue: number;
  percentage_of_taxes: number;
  reference_month: string;
  total_spend: number;
  transactions_gross_revenue: number;
  transactions_total_spend: number;
}

function LifeTime() {
  const [balances, setBalance] = useState<IBalance[]>([]);

  const loadData = useCallback(async function () {
    try {
      const response = await api.get("/balances");

      setBalance(response.data);
    } catch (error) {
      toast.error(renderMessageError(error));
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <div id="LifeTime">
      <LinkerPageHeader name="Senhor Barriga" to="/dashboards" type="return" />
      <h2 className="lifetime-title">Criar Cenários</h2>

      <Box display="flex" className="table">
        <div className="aside-info">
          <p className="header">Mês</p>
          <p className="blue">Saldo em caixa</p>
          <p>Receita Bruta</p>
          <p>Gastos</p>
          <p>Imposto</p>
          <p className="blue">Resultado</p>
        </div>
        <div
          className="balances-table"
          style={{
            display: "flex",
            width: "100%",
            overflowX: "auto",
          }}
        >
          {balances.map((balance) => (
            <div id="balance-card" key={balance.id}>
              <p className="header">{balance.reference_month}</p>
              <p className="blue">Saldo em caixa</p>
              <p>{balance.gross_revenue}</p>
              <p>{balance.total_spend}</p>
              <p>
                {balance.gross_revenue *
                  Number((1 - balance.percentage_of_taxes).toFixed(4))}
                ({Number((1 - balance.percentage_of_taxes).toFixed(4)) * 100}%)
              </p>
              <p className="blue">
                {balance.percentage_of_taxes * balance.gross_revenue -
                  balance.total_spend}
              </p>
            </div>
          ))}
        </div>
      </Box>

      <img src={image} alt="Tempo de Vida" className="image" />
    </div>
  );
}

export default LifeTime;
