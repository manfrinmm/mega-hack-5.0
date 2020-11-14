import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryBackground: string;

      background: string;

      text: string;
      textSecondary: string;
      textSelected: string;

      textButton: string;
    };
  }
}
