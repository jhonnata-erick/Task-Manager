import type { Meta, StoryObj } from "@storybook/react-vite";

import CreateTask from "./CreateTask";

const meta = {
  component: CreateTask,
} satisfies Meta<typeof CreateTask>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
