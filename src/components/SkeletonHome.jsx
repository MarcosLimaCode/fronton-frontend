import styled, { keyframes } from "styled-components";

export default function SkeletonHome() {
  return (
    <Container>
      <MainBox>
        <ToNews>
          <Sk style={{ height: "28px", width: "100%", marginBottom: "12px" }} />
          <Sk style={{ height: "28px", width: "90%", marginBottom: "12px" }} />
          <Sk style={{ height: "28px", width: "70%", marginBottom: "20px" }} />
          <Sk style={{ height: "14px", width: "120px" }} />
        </ToNews>
      </MainBox>

      <FirstRow>
        {[0, 1, 2].map((i) => (
          <LineBox key={i}>
            <Sk style={{ height: "100px", width: "100px", flexShrink: 0 }} />
            <LeftText>
              <Sk
                style={{ height: "11px", width: "60px", marginBottom: "8px" }}
              />
              <Sk
                style={{ height: "15px", width: "100%", marginBottom: "6px" }}
              />
              <Sk style={{ height: "15px", width: "80%" }} />
            </LeftText>
          </LineBox>
        ))}
      </FirstRow>

      <SecondRow>
        {[0, 1, 2, 3].map((i) => (
          <FrameBox key={i}>
            <Sk
              style={{ height: "120px", width: "100%", marginBottom: "12px" }}
            />
            <Sk
              style={{ height: "14px", width: "100%", marginBottom: "6px" }}
            />
            <Sk style={{ height: "14px", width: "75%", marginBottom: "8px" }} />
            <Sk style={{ height: "11px", width: "60px" }} />
          </FrameBox>
        ))}
      </SecondRow>
    </Container>
  );
}

const shimmer = keyframes`
  0% { background-position: -600px 0; }
  100% { background-position: 600px 0; }
`;

const Sk = styled.div`
  background: linear-gradient(90deg, #2a2a2a 25%, #333 50%, #2a2a2a 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.4s infinite;
  border-radius: 4px;
`;

const Container = styled.div`
  width: 1000px;
`;
const MainBox = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #585858;
`;
const ToNews = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const FirstRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
  border-bottom: 1px solid #585858;
  padding-bottom: 18px;
`;
const LineBox = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;
const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const SecondRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;
const FrameBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 232px;
`;
