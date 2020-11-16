import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClasses from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get("connections")
            .then((response) => {
                const { total } = response.data;

                setTotalConnections(total);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Renata Reis" />
                    <h2>Seu histórico de clientes<br/> sempre atualizado</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/pesquisar" className="study">
                        <img src={studyIcon} alt="Pesquisar" />
                        Pesquisar
                    </Link>

                    <Link to="/registrar" className="give-classes">
                        <img src={giveClasses} alt="Registrar" />
                        Registrar
                    </Link>
                </div>

                <span className="total-connections">
                    {totalConnections === 1
                        ? `Total de 1 conexão já realizada`
                        : `Total de ${totalConnections} clientes cadastradas`}
                    <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;
