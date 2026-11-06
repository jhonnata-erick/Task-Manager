import { create } from "zustand";
import type { Database, Workspace, WorkspaceStore } from "../types/workspace";
import getDBfromLocalStorage from "../utils/GetDatabase";

const useWorkspaceStore = create<WorkspaceStore>((set, get) => ({
  id: "",
  title: "",
  tasks: [],
  statuses: [],
  projects: [],
  application: {
    buildWorkspace: ({ id, title, tasks, projects, statuses }) => {
      const workspace: Workspace = {
        id: id,
        type: "workspace",
        title: title,
        tasks: tasks,
        statuses: statuses,
        projects: projects,
      };
      get().database.post(workspace);
    },
    setWorkspaceData: (id) => {
      const workspace = get().database.get(id);
      if (workspace) {
        set({
          id: id,
          title: workspace.title,
          tasks: workspace.tasks,
          statuses: workspace.statuses,
          projects: workspace.projects,
        });
      } else {
        throw new Error("This workspace does not exist");
      }
    },
    setProject: (project) => {
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
    deleteStatus: (id) => {
      const statuses = get().statuses;
      const { del } = get().database;
      set({ statuses: statuses.filter((b) => b.id !== id) });
      del(id);
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
        const database = getDBfromLocalStorage();
        const workspace = database.find((ws) => ws.id === id);
        return workspace || null;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    post: (object) => {
      const database = getDBfromLocalStorage();
      let newDatabase: Database;
      if ("workspaceId" in object) {
        newDatabase = database.map((ws) => {
          if (ws.id === object.workspaceId) {
            switch (object.type) {
              case "task": {
                return {
                  ...ws,
                  tasks: [...ws.tasks, object],
                };
              }
              case "status": {
                return {
                  ...ws,
                  statuses: [...ws.statuses, object],
                };
              }
              case "project": {
                return {
                  ...ws,
                  projects: [...ws.projects, object],
                };
              }
            }
          }
          return ws;
        });
      } else {
        newDatabase = [...database, object];
      }
      localStorage.setItem("workspaces", JSON.stringify(newDatabase));
    },
    put: (object) => {
      const database = getDBfromLocalStorage();
      const newDB = database.map((ws) => {
        switch (object.type) {
          case "task": {
            const newTasks = ws.tasks.map((task) =>
              object.id === task.id ? object : task,
            );
            return { ...ws, tasks: newTasks };
          }
          case "status": {
            const newStatuses = ws.statuses.map((status) =>
              object.id === status.id ? object : status,
            );
            return { ...ws, statuses: newStatuses };
          }
          case "project": {
            const newBoards = ws.projects.map((project) =>
              object.id === project.id ? object : project,
            );
            return { ...ws, projects: newBoards };
          }
          case "workspace": {
            return object.id === ws.id ? object : ws;
          }
        }
      });
      localStorage.setItem("workspaces", JSON.stringify(newDB));
    },
    del: (id) => {
      const database = getDBfromLocalStorage();
      if (database.some((ws) => ws.id === id)) {
        const newDB = database.filter((ws) => ws.id !== id);
        localStorage.setItem("workspaces", JSON.stringify(newDB));
      }
      const newDB = database.map((ws) => {
        return {
          ...ws,
          tasks: ws.tasks.filter((task) => task.id !== id),
          statuses: ws.statuses.filter((status) => status.id !== id),
          projects: ws.projects.filter((project) => project.id !== id),
        };
      });
      localStorage.setItem("workspaces", JSON.stringify(newDB));
    },
  },
}));

export default useWorkspaceStore;
