import { create } from "zustand";
import type { workspace, WorkspaceStore } from "../types/workspace";
import getDBfromLocalStorage from "../utils/getDB";

const useWorkspaceStore = create<WorkspaceStore>((set, get) => ({
  id: "",
  name: "",
  tasks: [],
  boards: [],
  application: {
    buildWorkspace: ({ id, name, tasks, boards }) => {
      const workspace: workspace = {
        id: id,
        type: "workspace",
        name: name,
        tasks: tasks,
        boards: boards,
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
          boards: workspace.boards,
        });
      }
    },
    setBoard: (board) => {
      const boards = get().boards;
      const { post, put } = get().database;
      if (boards.some((b) => b.id === board.id)) {
        set({ boards: boards.map((b) => (b.id === board.id ? board : b)) });
        put(board);
      } else {
        set({ boards: [...boards, board] });
        post(board);
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
    deleteBoard: (id) => {
      const boards = get().boards;
      const { del } = get().database;
      set({ boards: boards.filter((b) => b.id !== id) });
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
                  boards: [...ws.boards, object],
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
      if (object.type === "board") {
        const newDB = db.map((ws) => {
          const newBoards = ws.boards.map((board) =>
            object.id === board.id ? object : board,
          );
          return { ...ws, boards: newBoards };
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
      if (id.includes("board")) {
        const newDB = db.map((ws) => {
          const newBoards = ws.boards.filter((board) => board.id !== id);
          return { ...ws, boards: newBoards };
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
