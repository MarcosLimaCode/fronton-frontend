import styled from "styled-components";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Body>
        <LeftSide>
          <MainBox></MainBox>
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

const Body = styled.div`
  height: max-content;
  width: 821px;
  display: flex;
  align-items: start;
`;

const MainBox = styled.div`
  height: 307px;
  width: 482px;
  margin-bottom: 18px;
  border-radius: 8px;
  background-color: #282828;
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
