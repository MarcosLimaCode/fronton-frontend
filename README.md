# Fronton — v0.1

Fronton é um agregador de notícias pensado para leitura limpa e personalização de temas. Esta documentação descreve a versão v0.1 (alpha) do frontend.

## Status

- Versão: v0.1 (Alpha)
- Objetivo: interface de consumo de notícias, integração com API de backend e componentes básicos de layout e tema.

## Principais funcionalidades

- Agregação de notícias (consome API REST: GET /news)
- Página inicial com destaque (MainBox) e listas de cards (SmallBox)
- Imagem de capa com overlay e blur para melhorar legibilidade dos textos
- Componentes reutilizáveis: Title, Update, ToNews
- Configuração via variáveis de ambiente (Vite)
- Estilização com styled-components
- Roteamento com react-router

## Tecnologias

- React
- Vite
- Axios
- styled-components
- React Router

## Uso

- Página principal (src/pages/Home.jsx) faz uma requisição GET ${API_URL}/news para popular a listagem.
- O componente MainBox exibe a primeira notícia com imagem de fundo; overlay e blur estão aplicados para garantir contraste do texto.
- SmallBox são usados para as notícias secundárias.

## Estrutura do projeto (resumo)

- src/pages/Home.jsx — página principal e layout dos cards
- src/components/Title.jsx — cabeçalho
- src/components/Update.jsx — componente de atualização/ações
- src/\* — demais componentes e estilos

## Problemas conhecidos / limitações

- Layout ainda em fase inicial — sem responsividade completa
- Tratamento de erros na UI pode ser melhorado (atualmente erros são logados no console)
- Paginação e filtros ainda não implementados

## Roadmap

- v0.2: responsividade, paginação, filtros por tema, testes unitários
- v1.0: autenticação, preferências do usuário, deploy de produção

## Contribuição

Contribuições são bem-vindas. Abra uma issue ou PR com descrições claras do que foi alterado.

## Licença

MIT

---

Desenvolvedor: Marcos Lima
