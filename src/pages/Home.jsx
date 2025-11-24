import styled from "styled-components";
import Title from "../components/Title";
import Update from "../components/Update";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Header>
        <Title />
        <Update />
      </Header>
      <Body>
        <LeftSide>
          <MainBox>
            <ToNews to="/1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              consectetur adipiscing.
            </ToNews>
            <p>CNN Brasil</p>
          </MainBox>
          <FirstCollummn>
            <SmallBox></SmallBox>
            <SmallBox></SmallBox>
          </FirstCollummn>
          <SecondCollumn>
            <SmallBox></SmallBox>
            <SmallBox></SmallBox>
          </SecondCollumn>
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
  height: 307px;
  width: 482px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  margin-bottom: 18px;
  border-radius: 8px;
  background-color: #282828;

  p {
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    color: #656363;
    margin-bottom: 24px;
    margin-left: 15px;
  }
`;

const ToNews = styled(Link)`
  font-family: "Merriweather", serif;
  font-style: italic;
  font-size: 20px;
  color: white;
  padding: 0px 15px 10px 15px;
  text-decoration: none;
`;

const LeftSide = styled.div`
  margin-right: 18px;
`;

const FirstCollummn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SecondCollumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SmallBox = styled.div`
  height: 147px;
  width: 232px;
  margin-bottom: 18px;
  border-radius: 8px;
  background-color: #282828;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBox = styled.div`
  height: 200px;
  width: 321px;
  margin-bottom: 18px;
  border-radius: 8px;
  background-color: #282828;
`;
