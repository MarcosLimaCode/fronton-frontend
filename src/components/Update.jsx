import styled from "styled-components";

export default function Update() {
  return (
    <Container>
      <p>Última atualização: 20 de novembro às 16:36</p>
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
