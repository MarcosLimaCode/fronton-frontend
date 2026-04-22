import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <ToHome to="/">
        <h1>Fronton.</h1>
      </ToHome>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 15px;

  h1 {
    text-align: left;
    font-family: "Arimo", sans-serif;
    color: white;
    font-weight: bold;
    font-size: 35px;
  }
`;

const ToHome = styled(Link)`
  text-decoration: none;
`;
