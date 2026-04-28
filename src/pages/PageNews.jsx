import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonAllNews from "../components/SkeletonAllNews";
import styled, { createGlobalStyle } from "styled-components";

import Title from "../components/Title";
import NewsList from "./NewList";
import { IoRefreshOutline } from "react-icons/io5";

export default function PageNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const otherNews = news?.filter((item) => item.portal !== "CNN Brasil");

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }),
    [];

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get(`${API_URL}/allnews`);
        setNews(response.data);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  function formatPubDate(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day} de ${month} às ${hours}:${minutes}`;
  }

  if (loading && !isMobile)
    return (
      <>
        <HomeBackground />
        <Container>
          <Header>
            <HeaderOptions>
              <Title />
              <div />
            </HeaderOptions>
          </Header>
          <Body>
            <SkeletonAllNews />
          </Body>
        </Container>
      </>
    );

  return (
    <>
      <HomeBackground />
      <Container>
        <Header>
          <HeaderOptions>
            <Title />
            <Update>
              <IoRefreshOutline size={"15"} to={"/refresh"} />
              <p>Última atualização: {formatPubDate(news?.[0]?.createdAt)}</p>
            </Update>
          </HeaderOptions>
        </Header>
        <Body>
          <AllNews>
            <p> Todas as notícias</p>
          </AllNews>
          <NewsList otherNews={otherNews} isMobile={true} index={10} />
        </Body>
      </Container>
    </>
  );
}

const tabletBreakpoint = "1024px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background-color: #202020;
  position: relative;
  z-index: 0;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 5px solid #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #202020;
`;

const Body = styled.div``;

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

const Update = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 15px;
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #656363;

  p {
    margin-left: 5px;
  }

  @media (max-width: ${tabletBreakpoint}) {
    display: none;
  }
`;

const HeaderOptions = styled.div`
  height: 70px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    padding: 0 20px;
    justify-content: center;
  }
`;

const HomeBackground = createGlobalStyle`
  body {
    background-color: #202020;
    margin: 0;
  }
`;

const DayGroup = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

const DayTitle = styled.h2`
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #656363;
  font-weight: 400;
  padding: 16px 0;
  border-bottom: 1px solid #2f2f2f;
  margin-bottom: 8px;
`;

const AllNews = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  font-family: "Arimo", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-top: 30px;
  text-decoration: none;

  @media (max-width: ${tabletBreakpoint}) {
    justify-content: center;
  }
`;
