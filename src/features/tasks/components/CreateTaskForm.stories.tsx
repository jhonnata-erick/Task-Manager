import type { Meta, StoryObj } from "@storybook/react-vite";

import { CreateTaskForm } from "./CreateTaskForm";

const meta = {
  component: CreateTaskForm,
} satisfies Meta<typeof CreateTaskForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
