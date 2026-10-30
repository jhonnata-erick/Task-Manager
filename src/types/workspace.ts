const statusName = [
  "backlog",
  "to-do",
  "doing",
  "review",
  "ready",
  "done",
] as const;

export type columnsName = (typeof statusName)[number];

export interface WorkspaceStore {
  id: string;
  name: string;
  tasks: task[];
  boards: board[];
  application: {
    buildWorkspace: ({ id, name, tasks, boards }: workspace) => void;
    setWorkspaceData: (id: string) => void;
    setBoard: (board: board) => void;
    setTask: (task: task) => void;
    deleteBoard: (id: `board-${number}`) => void;
    deleteTask: (id: `task-${number}`) => void;
  };
  database: {
    get: (id: string) => workspace | null;
    post: (object: task | board | workspace) => void;
    put: (object: task | board | workspace) => void;
    del: (
      id: `task-${number}` | `board-${number}` | `workspace-${number}`,
      workspaceId?: `workspace-${number}`,
    ) => void;
  };
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
  id: `workspace-${number}`;
  type: "workspace";
  name: string;
  tasks: task[];
  boards: board[];
}

export interface board {
  id: `board-${number}`;
  type: "board";
  workspaceId: `workspace-${number}`;
  title: string;
  tasks: string[];
  columns: column[];
}
export interface column {
  name: columnsName;
  tasks: string[];
}
export interface task {
  id: `task-${number}`;
  type: "task";
  title: string;
  status: columnsName;
  workspaceId: `workspace-${number}`;
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
