import { Link } from "react-router-dom";
import styled from "styled-components";

function NewsList({ otherNews, isMobile }) {
  const startIndex = isMobile ? 1 : 10;

  function formatPubDate(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day} de ${month} às ${hours}:${minutes}`;
  }

  return (
    <NewsContainer>
      {otherNews.slice(startIndex).map((item, index) => (
        <NewsItem key={index}>
          <SmallBox>
            {item?.imageUrl && (
              <img src={item.imageUrl} alt={item.title || ""} loading="lazy" />
            )}
          </SmallBox>
          <RightSide>
            <Title
              to={item.link}
              target="_blank"
              rel="noreferrer"
              title={item.content}
            >
              {item.title}
            </Title>
            <Bundle>
              <Logo>
                <img src={item.logo} title={item.portal} loading="lazy" />
              </Logo>
              <Portal>{item.portal}</Portal>
            </Bundle>
            <NewDate>{formatPubDate(item.publishedAt)}</NewDate>
          </RightSide>
        </NewsItem>
      ))}
    </NewsContainer>
  );
}

export default NewsList;

const NewsContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 40px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px 20px 0;
    box-sizing: border-box;
  }
`;

const NewsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  height: 100px;
  justify-content: start;
  padding: 20px 0;
  border-bottom: 1px solid #424141;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 12px;
    padding: 15px 0;

    border-bottom: 1px solid #2f2f2f;
  }
`;

const Portal = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #e7dfdf;
  margin-right: 20px;
  min-width: 100px;
`;

const NewDate = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #464545;
  margin-right: 20px;
  min-width: 100px;
  margin-top: 10px;
`;

const Title = styled(Link)`
  font-family: "Merriweather", serif;
  line-height: 1.3;
  font-size: 16px;
  color: #938e8e;
  margin-top: 10px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 0;
  }
`;

const SmallBox = styled.div`
  position: relative;
  margin-bottom: 18px;
  border-radius: 12px;
  background-color: #282828;

  img {
    height: 100px;
    width: 200px;
    border-radius: 12px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
      display: block;
    }
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Logo = styled.span`
  img {
    height: 15px;
    width: 15px;
    margin-right: 5px;
  }
`;

const Bundle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
