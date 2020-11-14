import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  main {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      flex-direction: column;

      margin-top: 164px;

      h2 {
        font-family: "Lato";
        font-weight: 600;
        font-size: 3.6rem;

        margin-bottom: 80px;
      }
    }
  }
`;

export const Content = styled.main`
  margin: 0 88px 96px;

  section {
    display: flex;
    justify-content: space-around;

    margin-bottom: 104px;
  }
`;

export const Product = styled.section`
  div {
    width: 100%;
    max-width: 504px;

    margin-top: 8px;

    h1 {
      font-family: "Lato";
      font-size: 6.4rem;
    }

    h2 {
      margin-top: 64px;

      font-size: 3.6rem;
      color: ${(props) => props.theme.colors.textSecondary};
    }
  }

  aside {
    max-width: 376px;
    width: 100%;

    img {
      width: 376px;
      height: 648px;
    }
  }
`;

export const WhyUs = styled.section`
  flex-direction: column;

  section#why-us {
    align-items: center;

    div {
      max-width: 392px;
      width: 100%;

      h2 {
        font-size: 3.6rem;
        margin-bottom: 40px;
      }

      p {
        font-size: 2.4rem;
      }

      p + p {
        margin-top: 96px;
      }
    }

    aside {
      /* max-width: 752px; */
      width: 100%;
    }
  }

  section#why-us2 {
    flex-direction: column;

    div {
      max-width: 624px;
      width: 100%;

      z-index: 2;

      h2 {
        font-size: 3.6rem;
        margin-bottom: 40px;
      }

      p {
        font-size: 2.4rem;
      }

      p + p {
        margin-top: 96px;
      }
    }

    aside {
      /* max-width: 752px; */
      /* width: 100%; */

      margin-left: auto;

      img {
        margin-top: -72px;
        /* width: 880px; */
        /* height: 636px; */
      }
    }
  }
`;

export const Comments = styled.section`
  flex-direction: column;
  margin-top: -192px;

  h2 {
    font-size: 3.6rem;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;
    margin: 0 auto;

    max-width: 604px;
    width: 100%;

    p {
      margin-right: 64px;
      font-size: 2.4rem;
    }

    img {
      height: 170px;
      height: 170px;
    }

    & + div {
      margin-top: 40px;
    }
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 3.6rem;
  color: ${(props) => props.theme.colors.textButton};

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;

  border-radius: 8px;

  padding: 24px 32px;

  max-width: 504px;
  width: 100%;
`;
