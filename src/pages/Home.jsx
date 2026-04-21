import {
  WiCloud,
  WiThermometer,
  WiDaySunny,
  WiNightClear,
} from "react-icons/wi";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import NewsList from "./NewList";

export default function Home() {
  const [news, setNews] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get(`${API_URL}/news`);
        setNews(response.data);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    }
    loadNews();
  }, []);

  function formatPubDate(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day} de ${month} às ${hours}:${minutes}`;
  }

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=America/Sao_Paulo"
      );
      const data = await response.json();
      setWeather(data);
    }

    fetchWeather();
  }, []);

  return (
    <Container>
      <Header>
        <Title />
        <Update>
          <p>Última atualização: {formatPubDate(news?.[0]?.createdAt)}</p>
        </Update>
      </Header>
      <Body>
        <LeftSide>
          <MainBox>
            <img src={news?.[0]?.imageUrl} />
            <div className="overlay" />
            <ToNews
              to={news?.[0]?.link}
              target="_blank"
              rel="noreferrer"
              title={news?.[0]?.content}
            >
              {news?.[0]?.title}
            </ToNews>
            <p title={news?.[0]?.portal}>
              <img src={news?.[0]?.logo} className="logo" />
            </p>
          </MainBox>
          <FirstRow>
            <FrameBox>
              <SmallBox>
                <img src={news?.[1]?.imageUrl} />
              </SmallBox>
              <SmallTitle
                to={news?.[1]?.link}
                target="_blank"
                rel="noreferrer"
                state={{ newsContent: news?.[1] }}
                title={news?.[1]?.content}
              >
                {news?.[1]?.title}
              </SmallTitle>
              <p title={news?.[1]?.portal}>
                <img src={news?.[1]?.logo} className="logo" />
              </p>
            </FrameBox>
            <FrameBox>
              <SmallBox>
                <img src={news?.[2]?.imageUrl} />
              </SmallBox>
              <SmallTitle
                to={news?.[2]?.link}
                target="_blank"
                rel="noreferrer"
                state={{ newsContent: news?.[2] }}
                title={news?.[2]?.content}
              >
                {news?.[2]?.title}
              </SmallTitle>
              <p title={news?.[2]?.portal}>
                <img src={news?.[2]?.logo} className="logo" />
              </p>
            </FrameBox>
          </FirstRow>
          <SecondRow>
            <FrameBox>
              <SmallBox>
                <img src={news?.[3]?.imageUrl} />
              </SmallBox>
              <SmallTitle
                to={news?.[3]?.link}
                target="_blank"
                rel="noreferrer"
                state={{ newsContent: news?.[3] }}
                title={news?.[3]?.content}
              >
                {news?.[3]?.title}
              </SmallTitle>
              <p title={news?.[3]?.portal}>
                <img src={news?.[3]?.logo} className="logo" />
              </p>
            </FrameBox>
            <FrameBox>
              <SmallBox>
                <img src={news?.[4]?.imageUrl} />
              </SmallBox>
              <SmallTitle
                to={news?.[4]?.link}
                target="_blank"
                rel="noreferrer"
                state={{ newsContent: news?.[4] }}
                title={news?.[4]?.content}
              >
                {news?.[4]?.title}
              </SmallTitle>
              <p title={news?.[4]?.portal}>
                <img src={news?.[4]?.logo} className="logo" />
              </p>
            </FrameBox>
          </SecondRow>

          <LastNews>
            <p> Últimas notícias.</p>
          </LastNews>
        </LeftSide>
        <RightSide>
          <FrameSideBox>
            <SideBox>
              <img src={news?.[5]?.imageUrl} className="main" />
              <p title={news?.[5]?.portal}>
                <img src={news?.[5]?.logo} className="logo" />
              </p>
            </SideBox>
            <SideNews
              to={news?.[5]?.link}
              target="_blank"
              rel="noreferrer"
              title={news?.[5]?.content}
            >
              {news?.[5]?.title}
            </SideNews>
            <Portal>
              <p>{news?.[5]?.portal}</p>
            </Portal>
          </FrameSideBox>
          <FrameSideBox>
            <SideBox>
              <img src={news?.[6]?.imageUrl} className="main" />
              <p title={news?.[6]?.portal}>
                <img src={news?.[6]?.logo} className="logo" />
              </p>
            </SideBox>
            <SideNews
              to={news?.[6]?.link}
              target="_blank"
              rel="noreferrer"
              state={{ newsContent: news?.[6] }}
              title={news?.[6]?.content}
            >
              {news?.[6]?.title}
            </SideNews>
            <Portal>
              <p>{news?.[6]?.portal}</p>
            </Portal>
          </FrameSideBox>
          <FrameSideBox>
            <SideBox>
              <img src={news?.[7]?.imageUrl} className="main" />
              <p title={news?.[7]?.portal}>
                <img src={news?.[7]?.logo} className="logo" />
              </p>
            </SideBox>
            <SideNews
              to={news?.[7]?.link}
              target="_blank"
              rel="noreferrer"
              title={news?.[7]?.content}
            >
              {news?.[7]?.title}
            </SideNews>
            <Portal>
              <p>{news?.[7]?.portal}</p>
            </Portal>
          </FrameSideBox>
        </RightSide>
      </Body>
      <Footer>
        <NewsList news={news} />
      </Footer>
      <Weather>
        {weather && (
          <p className="city">
            São Paulo
            <WiCloud size={"20"} />
            {weather.current.temperature_2m}°C Máx:
            {weather.daily.temperature_2m_max[0]}°C Mín:
            {weather.daily.temperature_2m_min[0]}°C
          </p>
        )}
      </Weather>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100%;
  width: 100vw;
  background-color: #202020;
  position: relative;
  z-index: 0;
`;

const Header = styled.div`
  height: 70px;
  width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  height: max-content;
  width: 850px;
  min-height: 1000px;
  display: flex;
  align-items: start;
  border-bottom: 5px solid #ffffff; /* Borda superior para separar do título */
`;

const MainBox = styled.div`
  position: relative;
  height: 307px;
  width: 520px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  margin-bottom: 18px;
  border-radius: 12px;
  background-color: #282828;
  overflow: hidden;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 0, 0, 0.6);

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.8) 20%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);

    z-index: 1;
    pointer-events: none;
    border-radius: 0 0 12px 12px;
  }

  .logo {
    height: 25px;
    width: 25px;
    margin-right: 5px;
    position: relative;
    z-index: 3;
    margin-bottom: 24px;
    margin-left: 25px;
    background-color: #bedd0a;
    padding: 5px;
    border-radius: 5px;
  }
`;

const ToNews = styled(Link)`
  font-family: "Merriweather", serif;
  font-style: italic;
  color: white;
  padding: 0px 15px 10px 25px;
  text-decoration: none;
  position: relative;
  z-index: 2;
`;

const SideNews = styled(Link)`
  font-family: "Merriweather", serif;
  font-style: italic;
  color: white;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LeftSide = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-right: 18px;
  position: relative;
`;

const FirstRow = styled.div`
  width: 520px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const SecondRow = styled.div`
  width: 520px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FrameBox = styled.div`
  height: 270px;
  width: 232px;
  border-radius: 12px;
  background-color: #3c3b3b;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px;
  position: relative;

  .logo {
    height: 25px;
    width: 25px;
    margin-right: 5px;
    position: absolute;
    z-index: 3;
    margin-left: 5px;
    background-color: #bedd0a;
    padding: 5px;
    border-radius: 5px;
    bottom: 20px;
    left: 10px;
  }
`;

const SmallBox = styled.div`
  position: relative;

  height: 147px;
  max-height: 120px;
  width: 232px;
  margin-bottom: 18px;
  border-radius: 12px;
  background-color: #282828;

  img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 120px;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    z-index: 0;
  }
`;

const SmallTitle = styled(Link)`
  font-family: "Merriweather", serif;
  font-style: italic;
  color: white;
  padding: 0px 15px 10px 5px;
  text-decoration: none;
  position: relative;
  z-index: 2;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBox = styled.div`
  height: 200px;
  width: 321px;
  margin-bottom: 18px;
  border-radius: 12px;
  background-color: #282828;
  position: relative;

  .main {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 120px;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    z-index: 0;
  }

  .logo {
    height: 25px;
    width: 25px;
    margin-right: 5px;
    position: absolute;
    z-index: 3;
    margin-left: 5px;
    background-color: #bedd0a;
    padding: 5px;
    border-radius: 5px;
    bottom: 20px;
    left: 10px;
  }
`;

const Update = styled.div`
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

const FrameSideBox = styled.div`
  height: fit-content;
  margin-bottom: 30px;
`;

const LastNews = styled.div`
  font-family: "Arimo", sans-serif;
  font-weight: bold;
  font-size: 65px;
  color: white;
  margin-top: 18px;
`;

const Weather = styled.div`
  align-items: end;
  margin-bottom: 10px;
  margin-top: 10px;

  .city {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #656363;
  }

  svg {
    vertical-align: middle; /* Alinha os ícones ao meio */
    margin-right: 5px; /* Espaçamento entre o ícone e o texto */
  }

  p {
    display: flex;
    align-items: center; /* Garante alinhamento interno */
  }
`;

const Footer = styled.div`
  position: relative;
  z-index: 1;
`;

const Portal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 10px;

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
