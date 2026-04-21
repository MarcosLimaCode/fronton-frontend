import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Update() {
  const location = useLocation();
  const dateFormatted = location.state?.dateFormatted;

  return (
    <Container>
      <p>Última atualização: {formatPubDate(dateFormatted)}</p>
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
    font-family: "Chivo Mono", monospace;
    color: white;
  }

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #656363;
  }
`;
