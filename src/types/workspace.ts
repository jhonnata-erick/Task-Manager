const priorityList = ["None", "Low", "Medium", "High", "Urgent"] as const;
const priorityColors = [
  "#9CA3AF",
  "#3B82F6",
  "#F59E0B",
  "#F97316",
  "#EF4444",
] as const;

export interface WorkspaceStore {
  id: string;
  title: string;
  tasks: Task[];
  statuses: Status[];
  projects: Project[];
  priorities: Priority[];
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
  priority: priorities;
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
  priority: Priority;
  description?: string;
}
export type priorities = (typeof priorityList)[number];
export type priorityColors = (typeof priorityColors)[number];

export interface Priority {
  title: priorities;
  color: priorityColors;
}

export interface CheckItem {
  id: number;
  name: string;
  checked: boolean;
  priority: number;
}

export type Database = Workspace[];
