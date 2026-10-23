const statusName = [
  "backlog",
  "to-do",
  "doing",
  "review",
  "ready",
  "done",
] as const;

export type columnsName = (typeof statusName)[number];

export interface WorkspaceStoreInterface {
  name: string;
  tasks: task[];
  boards: board[];
  createBoard: (title: string, collumns: columnsName[]) => void;
  createTask: (args: createTaskArgs) => void;
  workspaces: {
    id: string;
    title: string;
  }[];
}
export type createTaskArgs = {
  title: string;
  description?: string;
  dueDate?: string;
  checklist?: checkItem[];
  priority: 1 | 2 | 3;
  boardId: string;
  status: columnsName;
};
export interface workspace {
  id: number;
  name: string;
  tasks: task[];
  boards: board[];
}

export interface board {
  id: string;
  title: string;
  tasks: string[];
  columns: column[];
}
export interface column {
  name: columnsName;
  tasks: string[];
}
export interface task {
  id: string;
  title: string;
  boardId: string;
  status: columnsName;
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  completedAt?: Date;
  priority: 1 | 2 | 3;
  description?: string;
  checklist?: checkItem[];
}
export interface checkItem {
  id: number;
  name: string;
  checked: boolean;
  priority: number;
}
