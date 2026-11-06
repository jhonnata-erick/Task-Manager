import type { Meta, StoryObj } from "@storybook/react-vite";
import "../../app/index.css";

import KanbanColumn from "./KanbanColumn";

const meta = {
  component: KanbanColumn,
} satisfies Meta<typeof KanbanColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      {
        id: "task-1024",
        type: "task",
        title: "Finalizar relatório de métricas",
        status: "in_progress",
        workspaceId: "workspace-5",
        projectId: "project-1",
        dueDate: "2026-11-15T18:00:00.000Z",
        createdAt: "2026-11-04T01:17:00.000Z",
        priority: "High",
        description:
          "Revisar os dados do Q3 e exportar o PDF para a diretoria.",
      },
      {
        id: "task-1025",
        type: "task",
        status: "to-do",
        projectId: "project-1",
        workspaceId: "workspace-5",
        dueDate: "2026-11-15T18:00:00.000Z",
        createdAt: "2026-11-04T01:17:00.000Z",
        priority: "High",
        description: "",
        title: "Finalizar Task Manager",
      },
    ],
    columnName: "To-do",
  },
};
