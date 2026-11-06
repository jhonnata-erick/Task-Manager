export interface WorkspaceStore {
  id: string;
  title: string;
  tasks: Task[];
  statuses: Status[];
  projects: Project[];
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
      tasks: Task[];
      statuses: Status[];
      projects: Project[];
    }) => void;
    setWorkspaceData: (id: string) => void;
    setProject: (project: Project) => void;
    setTask: (task: Task) => void;
    deleteProject: (id: `project-${number}`) => void;
    deleteStatus: (id: `status-${number}`) => void;
    deleteTask: (id: `task-${number}`) => void;
  };
  database: {
    get: (id: string) => Workspace | null;
    post: (object: Task | Status | Project | Workspace) => void;
    put: (object: Task | Status | Project | Workspace) => void;
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

export type createTaskArguments = {
  title: string;
  description?: string;
  dueDate?: string;
  checklist?: CheckItem[];
  priority: 1 | 2 | 3;
  workspaceId: string;
  status: string;
};
export interface Workspace {
  id: `workspace-${number}`;
  type: "workspace";
  title: string;
  tasks: Task[];
  statuses: Status[];
  projects: Project[];
}

export interface Project {
  id: `project-${number}`;
  type: "project";
  workspaceId: `workspace-${number}`;
  title: string;
  tasks: string[];
  statuses: string[];
}
export interface Status {
  id: `status-${number}`;
  workspaceId: `workspace-${number}`;
  projectId: `project-${number}`;
  type: "status";
  title: string;
  tasks: string[];
  color: string;
}
export interface Task {
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
export interface CheckItem {
  id: number;
  name: string;
  checked: boolean;
  priority: number;
}

export type Database = Workspace[];
