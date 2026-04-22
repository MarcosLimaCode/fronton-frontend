import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LEAGUE_IDS = [1, 71, 72, 73, 13, 11];

export default function JogosHoje() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    async function fetchJogos() {
      try {
        const response = await axios.get(
          "https://v3.football.api-sports.io/fixtures",
          {
            headers: { "x-apisports-key": import.meta.env.VITE_FUTEBOL_TOKEN },
            params: {
              date: new Date().toISOString().split("T")[0],
              timezone: "America/Sao_Paulo",
            },
          }
        );

        const filtrados = response.data.response.filter((jogo) =>
          LEAGUE_IDS.includes(jogo.league.id)
        );

        setJogos(filtrados);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    }

    fetchJogos();
  }, []);

  return (
    <Row>
      {jogos.map((jogo, index) => (
        <GameBox key={index}>
          <League>{jogo.league.name}</League>
          <Teams>
            <Team>
              <img src={jogo.teams.home.logo} alt={jogo.teams.home.name} />
              <span>{jogo.teams.home.name}</span>
            </Team>
            <Score>
              {jogo.fixture.status.short === "NS"
                ? new Date(jogo.fixture.date).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : `${jogo.goals.home} x ${jogo.goals.away}`}
            </Score>
            <Team>
              <img src={jogo.teams.away.logo} alt={jogo.teams.away.name} />
              <span>{jogo.teams.away.name}</span>
            </Team>
          </Teams>
        </GameBox>
      ))}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  overflow-x: auto;
  padding: 12px 0;
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 80px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const GameBox = styled.div`
  min-width: 200px;
  background-color: #2e2e2e;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const League = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 10px;
  color: #656363;
  text-transform: uppercase;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 60px;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  span {
    font-family: "Chivo Mono", monospace;
    font-size: 10px;
    color: white;
    text-align: center;
  }
`;

const Score = styled.span`
  font-family: "Chivo Mono", monospace;
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
