import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media(max-width:720px) {
      font-size: 54%;
    }
  }

  body {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;

    color:${(props) => props.theme.colors.text};

    background: ${(props) => props.theme.colors.background};
    
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    font-weight: 600;
  }

  a {
    color:${(props) => props.theme.colors.text};

    text-decoration: none;
  }
`;
