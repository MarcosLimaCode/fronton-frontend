import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "../components/Title";
import Update from "../components/Update";
import { Link } from "react-router-dom";

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

  return (
    <Container>
      <Header>
        <Title />
        <Update />
      </Header>
      <Body>
        <LeftSide>
          <MainBox>
            <img src={news?.[0]?.imageUrl} />
            <div className="overlay" />
            <ToNews to="/1">{news?.[0]?.title}</ToNews>
            <p>{news?.[0]?.portal}</p>
          </MainBox>
          <FirstRow>
            <FrameBox>
              <SmallBox>
                <img src={news?.[1]?.imageUrl} />
              </SmallBox>
              <SmallTitle to="/1">{news?.[1]?.title}</SmallTitle>
              <p>{news?.[0]?.portal}</p>
            </FrameBox>
            <FrameBox>
              <SmallBox>
                <img src={news?.[2]?.imageUrl} />
              </SmallBox>
              <SmallTitle to="/1">{news?.[2]?.title}</SmallTitle>
              <p>{news?.[0]?.portal}</p>
            </FrameBox>
          </FirstRow>
          <SecondRow>
            <FrameBox>
              <SmallBox>
                <img src={news?.[3]?.imageUrl} />
              </SmallBox>
              <SmallTitle to="/1">{news?.[3]?.title}</SmallTitle>
              <p>{news?.[0]?.portal}</p>
            </FrameBox>
            <FrameBox>
              <SmallBox>
                <img src={news?.[4]?.imageUrl} />
              </SmallBox>
              <SmallTitle to="/1">{news?.[3]?.title}</SmallTitle>
              <p>{news?.[0]?.portal}</p>
            </FrameBox>
          </SecondRow>
        </LeftSide>
        <RightSide>
          <SideBox></SideBox>
          <SideBox></SideBox>
          <SideBox></SideBox>
        </RightSide>
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
  display: flex;
  align-items: start;
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

  p {
    font-family: "Chivo Mono", monospace;
    height: 20px;
    width: fit-content;
    background-color: #bedd0a;
    font-size: 12px;
    color: #353434;
    margin-bottom: 24px;
    margin-left: 25px;
    position: relative;
    z-index: 2;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 3px;
  }

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
    height: 40%;
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

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-right: 18px;
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

  p {
    font-family: "Chivo Mono", monospace;
    height: 20px;
    width: fit-content;
    background-color: #bedd0a;
    font-size: 12px;
    color: #353434;
    margin-bottom: 24px;
    margin-left: 5px;
    position: absolute;
    z-index: 2;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    bottom: 0;
    left: 10;
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
`;
