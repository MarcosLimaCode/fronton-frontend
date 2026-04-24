import { Link } from "react-router-dom";
import styled from "styled-components";

function NewsList({ otherNews }) {
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
      {otherNews.slice(10).map((item, index) => (
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
`;

const NewsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  height: 100px;
  justify-content: start;
  padding: 10px 0;
  border-bottom: 1px solid #424141; /* Borda fina e cinza */
  position: relative;
`;

const Portal = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #e7dfdf;
  margin-right: 20px; /* Espaço entre a data e o título */
  min-width: 100px; /* Garante alinhamento das datas */
`;

const NewDate = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 12px;
  color: #464545;
  margin-right: 20px; /* Espaço entre a data e o título */
  min-width: 100px;
  margin-top: 10px; /* Garante alinhamento das datas */
`;

const Title = styled(Link)`
  font-family: "Arimo", sans-serif;
  font-size: 16px;
  color: #938e8e;
  margin-top: 10px;
  text-decoration: none;
`;

const SmallBox = styled.div`
  position: absolute;
  height: auto;
  width: auto;
  margin-bottom: 18px;
  border-radius: 12px;
  background-color: #282828;
  position: relative;

  img {
    height: 100px;
    width: 200px;
    border-radius: 12px;
    object-fit: cover;
    z-index: 0;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  z-index: 1;
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
