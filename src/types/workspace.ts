export interface WorkspaceStore {
  id: string;
  name: string;
  tasks: task[];
  projects: project[];
  application: {
    buildWorkspace: ({
      id,
      name,
      tasks,
      projects,
    }: {
      id: `workspace-${number}`;
      name: string;
      tasks: task[];
      projects: project[];
    }) => void;
    setWorkspaceData: (id: string) => void;
    setBoard: (project: project) => void;
    setTask: (task: task) => void;
    deleteProject: (id: `project-${number}`) => void;
    deleteTask: (id: `task-${number}`) => void;
  };
  database: {
    get: (id: string) => workspace | null;
    post: (object: task | project | workspace) => void;
    put: (object: task | project | workspace) => void;
    del: (
      id: `task-${number}` | `project-${number}` | `workspace-${number}`,
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
  projects: project[];
}

export interface project {
  id: `project-${number}`;
  type: "project";
  workspaceId: `workspace-${number}`;
  title: string;
  tasks: string[];
  columns: column[];
}
export interface column {
  title: string;
  tasks: string[];
  color: string;
}
export interface task {
  id: `task-${number}`;
  type: "task";
  title: string;
  status: string;
  workspaceId: `workspace-${number}`;
  projectId: `project-${number}`;
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
