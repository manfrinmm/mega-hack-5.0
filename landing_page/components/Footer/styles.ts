import styled from "styled-components";

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.primaryBackground};
`;

export const Content = styled.footer`
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 100%;

  padding: 32px 88px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;

    margin-right: 54px;
  }
`;

export const Options = styled.div`
  border-left: 1px solid #fff;
  padding-left: 54px;

  display: flex;
  align-items: center;

  color: #fff;

  section {
    align-items: start;
  }

  div {
    display: flex;
    align-items: center;

    padding: 8px 16px;

    p {
      margin-left: 8px;
      font-size: 1.6rem;
    }
  }

  div + div {
    margin-top: 16px;
  }
`;
