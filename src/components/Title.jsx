import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <h1>Fronton</h1>
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
