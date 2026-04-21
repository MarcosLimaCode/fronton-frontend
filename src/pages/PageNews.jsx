import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";

export default function PageNews() {
  const location = useLocation();
  const news = location.state?.newsContent;

  return (
    <Container>
      <Header>
        <Title />
      </Header>
      <Body>
        <NewsTitle>
          <h1>{news.title}</h1>
          <h2>Data de publicação: 20 de novembro às 16:36</h2>
        </NewsTitle>
        <Text>
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </Text>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #202020;
`;

const Header = styled.div`
  height: 70px;
  width: 821px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  height: max-content;
  width: 821px;
  font-family: "Merriweather", serif;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 8px;
  padding-bottom: 24px;
  background-color: #282828;
`;

const NewsTitle = styled.div`
  margin-top: 70px;
  margin-left: 84px;
  margin-right: 84px;
  margin-bottom: 24px;

  h1 {
    font-style: italic;
    font-weight: bold;
    font-size: 25px;
    color: white;
    margin-bottom: 10px;
  }

  h2 {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #656363;
  }
`;

const Text = styled.div`
  margin-left: 84px;
  margin-right: 84px;

  /* Ajustes de Legibilidade */
  font-size: 16px; /* 13px é muito pequeno para leitura longa */
  font-weight: 300; /* 100 pode sumir em telas com pouco brilho */
  color: #e0e0e0; /* Um branco levemente acinzentado cansa menos o olho */

  line-height: 2; /* Aumentamos para dar mais ar entre as linhas */
  text-align: justify;
  white-space: pre-line;

  /* A MÁGICA ESTÁ AQUI: */
  /* Como o G1 envia muitos \n, vamos tratar o espaçamento de blocos */
  display: flex;
  flex-direction: column;
  gap: 100px; /* Cria um espaço real entre os blocos de texto */
  text-decoration: none;

  /* Ajuste para imagens que venham no meio do conteúdo */
  img {
    max-width: 100%;
    height: auto;
    margin: 24px auto;
    display: block;
    border-radius: 8px;
  }
`;
