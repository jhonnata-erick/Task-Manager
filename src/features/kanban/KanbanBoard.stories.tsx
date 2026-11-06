import type { Meta, StoryObj } from "@storybook/react-vite";

import KanbanBoard from "./KanbanBoard";

const meta = {
  component: KanbanBoard,
} satisfies Meta<typeof KanbanBoard>;

export default meta;

type Story = StoryObj<typeof meta>;
const workspaceId = "workspace-101";
export const Default: Story = {
  args: {
    tasks: [],
    columns: [],

    tasks: [
      {
        id: "task-1",
        type: "task",
        title: "Configurar ambiente de desenvolvimento",
        status: "todo",
        workspaceId: workspaceId,
        dueDate: "2026-11-10T18:00:00.000Z",
        createdAt: "2026-11-04T12:00:00.000Z",
        priority: "High",
        description:
          "Instalar dependências, configurar o ESLint e preparar as variáveis de ambiente.",
      },
      {
        id: "task-2",
        type: "task",
        title: "Desenvolver componente de Card do Kanban",
        status: "in-progress",
        workspaceId: workspaceId,
        createdAt: "2026-11-04T13:30:00.000Z",
        updatedAt: "2026-11-04T15:00:00.000Z",
        priority: "Medium",
        description:
          "Criar a interface visual do card utilizando Tailwind CSS.",
      },
      {
        id: "task-3",
        type: "task",
        title: "Criar conexão com o banco de dados",
        status: "done",
        workspaceId: workspaceId,
        createdAt: "2026-11-02T09:00:00.000Z",
        completedAt: "2026-11-03T17:00:00.000Z",
        priority: "High",
        description: null,
      },
      {
        id: "task-4",
        type: "task",
        title: "Revisar documentação da API",
        status: "todo",
        workspaceId: workspaceId,
        createdAt: "2026-11-04T16:00:00.000Z",
        priority: "Low",
        description: null,
      },
    ],

    columns: [
      {
        name: "A Fazer",
        tasks: ["task-1", "task-4"],
      },
      {
        name: "Em Progresso",
        tasks: ["task-2"],
      },
      {
        name: "Concluído",
        tasks: ["task-3"],
      },
    ],
  },
};
