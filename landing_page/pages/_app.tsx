import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import DefaultLayout from "../styles/layouts/DefaultLayout";
import defaultTheme from "../styles/themes/default";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
