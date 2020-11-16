import React from "react";
import { Link } from "react-router-dom";

import SimpleMenu from "../../components/SimpleMenu";

import logoImg from "../../assets/images/startMoney-blue.svg";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import "./styles.css";

interface PageHeaderProps {
  name: string;
  type?: string;
  to: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <header id="LinkerPageHeader">
      {props.type === "topbar" && (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="liker-page-header__icon-button"
              color="inherit"
              aria-label="menu"
            >
              <SimpleMenu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <span className="liker-page-header__company-name">
                Senhor Barriga S/A
              </span>
            </Typography>
            <img className="img" src={logoImg} alt="Logo" />
          </Toolbar>
        </AppBar>
      )}

      {props.type === "return" && (
        <AppBar position="static">
          <Toolbar>
            <Link to={props.to}>
              <IconButton
                edge="start"
                className="liker-page-header__icon-button"
                color="inherit"
                aria-label="menu"
              >
                <ArrowBackIosIcon />
              </IconButton>
            </Link>
            <Link to={props.to} className={classes.title}>
              <span className="liker-page-header__company-name">Voltar</span>
            </Link>

            <img className="img" src={logoImg} alt="Logo" />
          </Toolbar>
        </AppBar>
      )}
    </header>
  );
};

export default PageHeader;
