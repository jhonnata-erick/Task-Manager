export interface WorkspaceStore {
  id: string;
  name: string;
  tasks: task[];
  boards: board[];
  application: {
    buildWorkspace: ({
      id,
      name,
      tasks,
      boards,
    }: {
      id: `workspace-${number}`;
      name: string;
      tasks: task[];
      boards: board[];
    }) => void;
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
  status: string;
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
  name: string;
  tasks: string[];
}
export interface task {
  id: `task-${number}`;
  type: "task";
  title: string;
  status: string;
  workspaceId: `workspace-${number}`;
  dueDate?: string;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
  priority: "Low" | "Medium" | "High";
  description?: string;
}
export interface checkItem {
  id: number;
  name: string;
  checked: boolean;
  priority: number;
}

export type database = workspace[];
