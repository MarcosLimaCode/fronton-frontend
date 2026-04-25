# Fronton — v0.2

Fronton é um agregador de notícias focado em leitura limpa e agilidade na informação. A versão v0.2 foca na estabilidade da interface, integrando estados de carregamento e um sistema de resiliência para metadados de mídia.

## Status

- Versão: v0.2 (Beta)
- Objetivo: Implementar estados de carregamento (Skeletons), integração com dados climáticos e tratamento de falhas em imagens de notícias.

## Principais Funcionalidades (Análise Técnica)

### 1. Feedback Visual e Performance

- **Skeleton Home**: Implementação de componentes de placeholder (SkeletonHome.jsx) com animações de pulsação controladas via CSS-in-JS. A funcionalidade visa eliminar o layout shift durante a requisição de dados à API, melhorando a experiência do usuário.
- **React 19 e Vite**: Atualização do ambiente de desenvolvimento para suporte às APIs mais recentes do React, garantindo builds otimizados e menor tempo de resposta no Hot Module Replacement (HMR).

### 2. Dashboard Informativo

- **Módulo de Clima**: Integração de dados meteorológicos diretamente na página inicial utilizando a biblioteca react-icons (WiCloud) para fornecer contexto ambiental em tempo real.
- **Variáveis de Ambiente**: Migração de chaves de API e URLs de serviço para o sistema de variáveis do Vite (import.meta.env), seguindo boas práticas de segurança e deploy.

### 3. Resiliência de Interface (Hooks)

- **useFetchMissingImages**: Implementação de um hook customizado que monitora a lista de notícias. Caso identifique itens sem URL de imagem, o sistema realiza uma busca assíncrona de metadados Open Graph para preencher as lacunas visuais automaticamente.

## Tecnologias

- React 19
- Vite
- Axios
- Styled-Components
- React Icons

## Uso

- **Home (`src/pages/Home.jsx`)**: Reestruturada com lógica de carregamento condicional e integração de novos hooks de estado.
- **NewList (`src/pages/NewList.jsx`)**: Nova rota implementada para visualização expandida de listas de notícias.
- **Skeletons (`src/components/SkeletonHome.jsx`)**: Utilizados como fallback visual enquanto as promessas do Axios não são resolvidas.

## Problemas Conhecidos / Limitações

- **CORS**: A recuperação de metadados de imagem via client-side pode sofrer bloqueios dependendo das políticas de segurança das fontes de notícias externas.
- **Responsividade**: O layout de grid da NewList ainda requer ajustes para resoluções de tela ultra-wide.

## Roadmap

- v0.3: Implementação de cache local (LocalStorage) para reduzir o volume de requisições.
- v0.4: Filtros por categoria e categorias de notícias dinâmicas.
- v1.0: Sistema de autenticação e gerenciamento de notícias favoritas.

## Contribuição

Sugestões de melhorias na lógica de recuperação de imagens ou novos componentes de UI podem ser enviadas via Pull Request.

## Licença

MIT

Desenvolvedor: Marcos Lima
