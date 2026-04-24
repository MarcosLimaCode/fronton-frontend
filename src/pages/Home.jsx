import { useFetchMissingImages } from "../hooks/useFetchMissingImages";
import SkeletonHome from "../components/SkeletonHome";
import { WiCloud } from "react-icons/wi";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import NewsList from "./NewList";
import JogosHoje from "../components/JogosHoje";
import { IoRefreshOutline } from "react-icons/io5";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get(`${API_URL}/news`);
        setNews(response.data);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      } finally {
        setLoading(false);
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

  useFetchMissingImages(news, setNews);
  const cnnNews = news?.filter((item) => item.portal === "CNN Brasil");
  const otherNews = news?.filter((item) => item.portal !== "CNN Brasil");

  if (loading)
    return (
      <Container>
        <Header>
          <HeaderOptions>
            <Title />
            <div />
          </HeaderOptions>
        </Header>
        <Body>
          <SkeletonHome />
        </Body>
      </Container>
    );

  return (
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
        <MainBox>
          {news?.[0]?.imageUrl && (
            <img
              src={otherNews?.[0]?.imageUrl}
              alt={otherNews?.[0]?.title || ""}
              className="main-image"
            />
          )}
          <ToNews>
            <MainTitle
              as={Link}
              to={otherNews?.[0]?.link}
              target="_blank"
              rel="noreferrer"
              title={otherNews?.[0]?.content}
            >
              {otherNews?.[0]?.title}
            </MainTitle>
            <Bundle>
              {otherNews?.[0]?.logo && (
                <img
                  src={otherNews?.[0]?.logo}
                  alt={otherNews?.[0]?.portal || ""}
                  className="logo"
                  title={otherNews?.[0]?.portal}
                  loading="lazy"
                />
              )}
              <p>{otherNews?.[0]?.portal}</p>
            </Bundle>
            <NewDate>{formatPubDate(otherNews?.[0]?.publishedAt)}</NewDate>
          </ToNews>
        </MainBox>
        <InferiorBar>
          <FirstRow>
            {cnnNews?.slice(0, 4).map((item, index) => (
              <LineBox key={index}>
                <LeftText>
                  <BundleBody>
                    <p title={item?.portal}>{item?.portal}</p>
                  </BundleBody>
                  <SmallTitle
                    to={item?.link}
                    target="_blank"
                    rel="noreferrer"
                    state={{ newsContent: item }}
                    title={item?.content}
                  >
                    {item?.title}
                  </SmallTitle>
                </LeftText>
              </LineBox>
            ))}
          </FirstRow>
          <SecondRow>
            {otherNews?.slice(1, 5).map((item, index) => (
              <FrameBox key={index}>
                <SmallBox>
                  {item?.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title || ""}
                      loading="lazy"
                    />
                  )}
                </SmallBox>
                <SmallTitle
                  to={item?.link}
                  target="_blank"
                  rel="noreferrer"
                  state={{ newsContent: item }}
                  title={item?.content}
                >
                  {item?.title}
                </SmallTitle>
                <BundleBody>
                  <p title={item?.portal}>
                    {item?.logo && (
                      <img
                        src={item.logo}
                        alt={item.portal || ""}
                        className="logo"
                        loading="lazy"
                      />
                    )}
                    {item?.portal}
                  </p>
                </BundleBody>
              </FrameBox>
            ))}
          </SecondRow>
          <ThirdRow>
            {otherNews?.slice(6, 10).map((item, index) => (
              <FrameBox key={index}>
                <SmallBox>
                  {item?.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title || ""}
                      loading="lazy"
                    />
                  )}
                </SmallBox>
                <SmallTitle
                  to={item?.link}
                  target="_blank"
                  rel="noreferrer"
                  state={{ newsContent: item }}
                  title={item?.content}
                >
                  {item?.title}
                </SmallTitle>
                <BundleBody>
                  <p title={item?.portal}>
                    {item?.logo && (
                      <img
                        src={item.logo}
                        alt={item.portal || ""}
                        className="logo"
                        loading="lazy"
                      />
                    )}
                    {item?.portal}
                  </p>
                </BundleBody>
              </FrameBox>
            ))}
          </ThirdRow>
          <LastNews>
            <p> Últimas notícias.</p>
          </LastNews>
        </InferiorBar>
      </Body>
      <Footer>
        <NewsList otherNews={otherNews} />
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
  width: 100%;
  background-color: #202020;
  position: relative;
  z-index: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 5px solid #ffffff; /* Borda inferior para separar do corpo */
`;

const Body = styled.div`
  height: max-content;
  width: 1000px;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 5px solid #ffffff; /* Borda superior para separar do título */
  margin-top: 25px;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  margin-bottom: 50px;
  margin-top: 18px;
  padding-bottom: 50px;
  border-bottom: 1px solid #585858;

  .main-image {
    height: 300px;
    min-width: 500px;
    max-width: 520px;
    object-fit: cover;
  }
`;

const ToNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: "Merriweather", serif;
  line-height: 1.3;
  font-size: 35px;
  color: white;
  text-decoration: none;
  margin-left: 18px;
`;

const Bundle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 15px;

  .logo {
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 14px;
    color: #8c8a8a;
  }
`;

const BundleBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  .logo {
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 14px;
    color: #8c8a8a;
  }
`;

const MainTitle = styled(Link)`
  text-decoration: none;
  color: white;
`;

const SideNews = styled(Link)`
  font-family: "Merriweather", serif;
  line-height: 1.3;
  color: white;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-right: 18px;
  position: relative;
`;

const FirstRow = styled.div`
  width: 1000px;
  margin-bottom: 18px;
  border-bottom: 1px solid #585858;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SecondRow = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ThirdRow = styled.div`
  width: 520px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FrameBox = styled.div`
  min-height: 260px;
  width: 232px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  .logo {
    height: 25px;
    width: 25px;
    margin-right: 5px;
    margin-left: 5px;
  }

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #8c8a8a;
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

const SmallBox = styled.div`
  position: relative;
  height: 147px;
  width: 232px;
  margin-bottom: 18px;
  background-color: #282828;
  z-index: 1;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    z-index: 0;
  }
`;
const SmallTitle = styled(Link)`
  font-family: "Merriweather", serif;
  line-height: 1.3;
  color: white;
  padding: 0px 15px 10px 5px;
  text-decoration: none;
  flex: 1;
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
  margin-top: 50px;
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

const HeaderOptions = styled.div`
  height: 70px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InferiorBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NewDate = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #464545;
  margin-right: 20px; /* Espaço entre a data e o título */
  min-width: 100px;
  margin-top: 10px; /* Garante alinhamento das datas */
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Soccer = styled.div`
  font-family: "Arimo", sans-serif;
  font-weight: bold;
  font-size: 25px;
  color: white;
  margin-bottom: 18px;
  margin-top: 30px;
`;

const LineBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  font-size: 15px;

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #8c8a8a;
    display: flex;
    align-items: center;
    margin-left: 5px;
    justify-content: start;
  }

  img {
    height: 100px;
    max-width: 150px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
