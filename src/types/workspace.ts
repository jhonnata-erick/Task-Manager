export interface WorkspaceStore {
  id: string;
  title: string;
  tasks: task[];
  statuses: status[];
  projects: project[];
  application: {
    buildWorkspace: ({
      id,
      title,
      tasks,
      statuses,
      projects,
    }: {
      id: `workspace-${number}`;
      title: string;
      tasks: task[];
      statuses: status[];
      projects: project[];
    }) => void;
    setWorkspaceData: (id: string) => void;
    setProject: (project: project) => void;
    setTask: (task: task) => void;
    deleteProject: (id: `project-${number}`) => void;
    deleteStatus: (id: `status-${number}`) => void;
    deleteTask: (id: `task-${number}`) => void;
  };
  database: {
    get: (id: string) => workspace | null;
    post: (object: task | status | project | workspace) => void;
    put: (object: task | status | project | workspace) => void;
    del: (
      id:
        | `task-${number}`
        | `status-${number}`
        | `project-${number}`
        | `workspace-${number}`,
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
  title: string;
  tasks: task[];
  statuses: status[];
  projects: project[];
}

export interface project {
  id: `project-${number}`;
  type: "project";
  workspaceId: `workspace-${number}`;
  title: string;
  tasks: string[];
  statuses: string[];
}
export interface status {
  id: `status-${number}`;
  workspaceId: `workspace-${number}`;
  projectId: `project-${number}`;
  type: "status";
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
