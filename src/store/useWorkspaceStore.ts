import { create } from "zustand";
import type { workspace, WorkspaceStore } from "../types/workspace";
import getDBfromLocalStorage from "../utils/getDB";

const useWorkspaceStore = create<WorkspaceStore>((set, get) => ({
  id: "",
  name: "",
  tasks: [],
  projects: [],
  application: {
    buildWorkspace: ({ id, name, tasks, projects }) => {
      const workspace: workspace = {
        id: id,
        type: "workspace",
        name: name,
        tasks: tasks,
        projects: projects,
      };
      get().database.post(workspace);
    },
    setWorkspaceData: (id) => {
      const workspace = get().database.get(id);
      if (workspace) {
        set({
          id: id,
          name: workspace.name,
          tasks: workspace.tasks,
          projects: workspace.projects,
        });
      } else {
        throw new Error("This workspace does not exist");
      }
    },
    setBoard: (project) => {
      const projects = get().projects;
      const { post, put } = get().database;
      if (projects.some((b) => b.id === project.id)) {
        set({
          projects: projects.map((b) => (b.id === project.id ? project : b)),
        });
        put(project);
      } else {
        set({ projects: [...projects, project] });
        post(project);
      }
    },
    setTask: (task) => {
      const tasks = get().tasks;
      const { post, put } = get().database;
      if (tasks.some((t) => t.id === task.id)) {
        set({ tasks: tasks.map((t) => (t.id === task.id ? task : t)) });
        put(task);
      } else {
        set({ tasks: [...tasks, task] });
        post(task);
      }
    },
    deleteProject: (id) => {
      const boards = get().projects;
      const { del } = get().database;
      set({ projects: boards.filter((b) => b.id !== id) });
      del(id);
    },
    deleteTask: (id) => {
      const tasks = get().tasks;
      const { del } = get().database;
      set({ tasks: tasks.filter((t) => t.id !== id) });
      del(id);
    },
  },

  database: {
    get: (id) => {
      if (!id.includes("workspace-")) return null;
      try {
        const db = getDBfromLocalStorage();
        const workspace = db.find((ws) => ws.id === id);
        return workspace || null;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
    post: (object) => {
      const db = getDBfromLocalStorage();
      if ("workspaceId" in object) {
        const newDB = db.map((ws) => {
          if (ws.id === object.workspaceId) {
            return object.type === "task"
              ? {
                  ...ws,
                  tasks: [...ws.tasks, object],
                }
              : {
                  ...ws,
                  projects: [...ws.projects, object],
                };
          }
          return ws;
        });
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      } else {
        const newDB = [...db, object];
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
    },
    put: (object) => {
      const db = getDBfromLocalStorage();
      if (object.type === "task") {
        const newDB = db.map((ws) => {
          const newTasks = ws.tasks.map((task) =>
            object.id === task.id ? object : task,
          );
          return { ...ws, task: newTasks };
        });
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
      if (object.type === "project") {
        const newDB = db.map((ws) => {
          const newBoards = ws.projects.map((project) =>
            object.id === project.id ? object : project,
          );
          return { ...ws, projects: newBoards };
        });
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
      if (object.type === "workspace") {
        const newDB = db.map((ws) => (object.id === ws.id ? object : ws));
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
    },
    del: (id) => {
      const db = getDBfromLocalStorage();
      if (id.includes("task")) {
        const newDB = db.map((ws) => {
          const newTasks = ws.tasks.filter((task) => task.id !== id);
          return { ...ws, tasks: newTasks };
        });
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
      if (id.includes("project")) {
        const newDB = db.map((ws) => {
          const newBoards = ws.projects.filter((project) => project.id !== id);
          return { ...ws, projects: newBoards };
        });
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
      if (id.includes("workspace")) {
        const newDB = db.filter((ws) => ws.id !== id);
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
    },
  },
}));

export default useWorkspaceStore;
