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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }),
    [];

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
        {!isMobile && (
          <InferiorBar>
            <BundleBody className="cnnSection">
              <img
                src={cnnNews[0]?.logo}
                alt={cnnNews?.[0]?.portal || ""}
                className="logo"
                title={cnnNews?.[0]?.portal}
                loading="lazy"
              />
              <p title={cnnNews[0]?.portal}>{cnnNews[0]?.portal}</p>
            </BundleBody>

            <FirstRow>
              {cnnNews?.slice(0, 3).map((item, index) => (
                <LineBox key={index}>
                  <LeftText>
                    <SmallTitleCnn
                      to={item?.link}
                      target="_blank"
                      rel="noreferrer"
                      state={{ newsContent: item }}
                      title={item?.content}
                    >
                      {item?.title}
                    </SmallTitleCnn>

                    <NewDate>{formatPubDate(item?.publishedAt)}</NewDate>
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
        )}
      </Body>
      <Footer>
        <NewsList otherNews={otherNews} isMobile={isMobile} />
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

const mobileBreakpoint = "768px";
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

const Body = styled.div`
  height: max-content;
  width: 1000px;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 5px solid #ffffff;
  margin-top: 25px;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    min-height: 100px;
    border-bottom: 0px solid #ffffff;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  margin-bottom: 50px;
  margin-top: 18px;
  padding-bottom: 50px;
  width: 100%;
  border-bottom: 1px solid #585858;

  .main-image {
    height: 300px;
    min-width: 500px;
    max-width: 520px;
    object-fit: cover;
  }

  @media (max-width: ${tabletBreakpoint}) {
    flex-direction: column;
    margin-bottom: 0px;

    .main-image {
      width: 100%;
      height: 300px;
      min-width: unset;
      max-width: unset;
      object-fit: cover;
    }
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

  @media (max-width: ${tabletBreakpoint}) {
    font-size: 22px;
    margin-left: 0;
    margin-top: 16px;
  }

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
  }
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
  padding-bottom: 10px;

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

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    flex-direction: column;
  }
`;

const SecondRow = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
`;

const ThirdRow = styled.div`
  width: 520px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
`;

const FrameBox = styled.div`
  min-height: 260px;
  width: 232px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  .logo {
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #8c8a8a;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    flex-direction: row;
    min-height: unset;
    align-items: center;
    gap: 12px;
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

  @media (max-width: ${tabletBreakpoint}) {
    width: 120px;
    height: 80px;
    flex-shrink: 0;
    margin-bottom: 0;
  }
`;

const SmallTitle = styled(Link)`
  font-family: "Merriweather", serif;
  line-height: 1.5;
  color: white;
  padding: 0px 15px 10px 0px;
  text-decoration: none;
  flex: 1;

  @media (max-width: ${tabletBreakpoint}) {
    font-size: 13px;
    padding: 0;
  }
`;

const SmallTitleCnn = styled(Link)`
  font-family: "Merriweather", serif;
  line-height: 1.5;
  color: white;
  padding: 0px 15px 0px 0px;
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

  @media (max-width: ${tabletBreakpoint}) {
    display: none;
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

  @media (max-width: ${tabletBreakpoint}) {
    font-size: 36px;
    display: none;
  }
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
    vertical-align: middle;
    margin-right: 5px;
  }

  p {
    display: flex;
    align-items: center;
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

const InferiorBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const NewDate = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #464545;
  margin-right: 20px;
  min-width: 100px;
  margin-top: 10px;
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
  margin-right: 10px;
  margin-bottom: 50px;
  font-size: 15px;

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #8c8a8a;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  img {
    height: 100px;
    max-width: 150px;
    object-fit: cover;
    margin-right: 10px;
  }

  @media (max-width: ${tabletBreakpoint}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
