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
  id: string;
  name: string;
  tasks: task[];
  boards: board[];
  workspaces: workspace[];
  createTask: (args: createTaskArgs) => void;
  createBoard: (
    title: string,
    collumns: columnsName[],
    workspaceId: string,
  ) => void;
  createWorkspace: (name: string) => void;
  getDataBase: () => database | null;
  setWorkspacesList: () => Promise<void>;
  setWorkspaceData: (id: string) => Promise<void>;
  updateDB: (id: string) => void;
}
export type createTaskArgs = {
  title: string;
  description?: string;
  dueDate?: string;
  checklist?: checkItem[];
  priority: 1 | 2 | 3;
  workspaceId: string;
  status: columnsName;
};
export interface workspace {
  id: string;
  name: string;
  tasks: task[];
  boards: board[];
}

export interface board {
  id: string;
  workspaceId: string;
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
  status: columnsName;
  workspaceId: string;
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

export type database = workspace[];
