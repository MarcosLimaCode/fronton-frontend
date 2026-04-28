import styled, { keyframes } from "styled-components";

export default function SkeletonAllNews() {
  return (
    <Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <FirstRow key={i}>
          <LineBox>
            <LeftText>
              <Sk
                style={{
                  height: "150px",
                  width: "100%",
                  marginBottom: "6px",
                  marginTop: "6px",
                }}
              />
            </LeftText>
          </LineBox>
        </FirstRow>
      ))}
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
  margin-top: 20px;
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
