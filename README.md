# Task Manager

<!-- TODO: uma frase de pitch: o que é e para quem. Ex.: "Gerenciador de tarefas pessoal com prazos, prioridades e filtros." -->

> **Status:** em desenvolvimento (planejamento do MVP)

<!-- TODO quando existirem: badge do CI, link da demo e prints -->
<!-- [![CI](https://github.com/<usuario>/<repo>/actions/workflows/ci.yml/badge.svg)](https://github.com/<usuario>/<repo>/actions) -->
<!-- **Demo:** https://... -->

## Por que este projeto existe

<!-- TODO: 2 a 4 linhas. Qual problema real ele resolve para você e o que você quer praticar (estado, formulários, testes de componente, fluxo de PR). -->

## Funcionalidades

### MVP

- [ ] Criar, editar e excluir tarefas (título obrigatório; descrição, prazo e prioridade opcionais)
- [ ] Marcar como concluída e reabrir
- [ ] Filtros (status, prioridade, prazo), busca por título e ordenação
- [ ] Persistência entre sessões
- [ ] Estados de vazio, carregando e erro; confirmação ou desfazer ao excluir
- [ ] Acessibilidade básica (labels, erros de formulário, teclado, foco)
- [ ] Modo de trabalho (Timer definido, musica, pausar, retomar, finalizar)

### Depois

<!-- TODO: categorias/tags, subtarefas, tema claro/escuro, exportar/importar JSON... -->

### Fora do escopo (por enquanto)

<!-- TODO: o que você decidiu NÃO fazer, para o escopo não crescer. Ex.: colaboração entre usuários, notificações push, app nativo. -->

## Tecnologias

<!-- TODO: preencher só com o que estiver de fato no projeto. Lista inicial planejada: -->

- React + TypeScript (strict) + Vite
- Testes: Vitest + Testing Library
- Qualidade: oxlint/ESLint, `tsc --noEmit`, GitHub Actions

## Como rodar

```bash
git clone https://github.com/<usuario>/<repo>.git
cd <repo>
npm install
npm run dev
```

| Script            | O que faz                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento        |
| `npm run tscheck` | Checagem de tipos (`tsc --noEmit`) |
| `npm run lint`    | Lint                               |
| `npm test`        | Testes                             |
| `npm run build`   | Build de produção                  |

<!-- TODO: confirmar que cada script acima existe no package.json antes do commit -->

## Estrutura do projeto

<!-- TODO: preencher quando as pastas existirem. Ex.:
src/
  features/tasks/   # componentes, hooks e lógica das tarefas
  storage/          # TaskRepository e implementações
  ...
-->

## Decisões de arquitetura

<!-- TODO: uma linha por decisão com o motivo e o trade-off. Ex.:
- Persistência atrás de uma interface `TaskRepository`: começa local e pode virar API sem mexer na UI.
-->

## Testes

<!-- TODO: o que é coberto (reducer, filtros, fluxos de componente) e como rodar. -->

## Fluxo de contribuição

- Uma branch por feature (`feat/...`, `fix/...`) e PR com descrição
- Commits no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/)
- O CI (typecheck, lint e testes) precisa passar antes do merge

## Aprendizados e próximos passos

<!-- TODO: preencher ao longo do projeto. O que deu errado, o que você mudaria, o que vem na v2. -->

## Autor

**Jhonnata** — <!-- TODO: link do GitHub e do LinkedIn -->
