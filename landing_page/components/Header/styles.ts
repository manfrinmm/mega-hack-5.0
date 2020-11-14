import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 36px 88px 96px;

  header {
    display: flex;
    align-items: center;

    div + div {
      margin-left: 240px;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;

    margin-left: 32px;

    div {
      margin-right: 32px;

      a {
        font-size: 24px;

        transition: color 0.2s;

        &:hover {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.textButton};

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;

  border-radius: 8px;

  padding: 16px 32px;
`;
