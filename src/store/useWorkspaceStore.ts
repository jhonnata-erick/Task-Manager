import { create } from "zustand";
import type {
  board,
  createTaskArgs,
  database,
  WorkspaceStoreInterface,
} from "../types/workspace";
import createId from "../utils/idgen";

const useWorkspaceStore = create<WorkspaceStoreInterface>((set, get) => ({
  id: "",
  name: "",
  tasks: [],
  boards: [],
  workspaces: [],
  createTask: ({
    title,
    status,
    workspaceId,
    priority,
    description,
    checklist,
  }: createTaskArgs) => {
    const task = {
      id: createId("task"),
      title: title,
      status: status,
      workspaceId: workspaceId,
      createdAt: new Date(),
      priority: priority,
      description: description || "",
      checklist: checklist || [],
    };
    const tasks = get().tasks;
    set({ tasks: [...tasks, task] });
    get().updateDB(workspaceId);
  },
  createBoard: (title: string, collumns, workspaceId) => {
    const board: board = {
      id: createId("board"),
      workspaceId: workspaceId,
      title: title,
      tasks: [],
      columns: collumns.map((name) => ({
        name: name,
        tasks: [],
      })),
    };
    const boards = get().boards;
    set({ boards: [...boards, board] });
    get().updateDB(workspaceId);
  },
  createWorkspace: (name: string) => {
    const workspace = {
      id: createId("workspace"),
      name: name,
      tasks: [],
      boards: [],
    };
    const workspaces = get().workspaces;
    set({ workspaces: [...workspaces, workspace] });
    get().updateDB(workspace.id);
  },
  getDataBase: () => {
    try {
      const rawData = localStorage.getItem("workspaces") || "[]";
      const db: database = JSON.parse(rawData);
      return db;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  setWorkspacesList: async () => {
    const db = get().getDataBase();
    const workspacelist = (db || []).map((ws) => ({
      id: ws.id,
      name: ws.name,
      boards: ws.boards,
      tasks: ws.tasks,
    }));
    set({ workspaces: workspacelist });
  },
  setWorkspaceData: async (id: string) => {
    const workspace = get().workspaces.find((ws) => ws.id === id);
    if (!workspace) {
      console.log("We couldn't find this workspace");
    }
    set({
      id: workspace?.id || "",
      tasks: workspace?.tasks || [],
      boards: workspace?.boards || [],
      name: workspace?.name || "Null",
    });
  },
  updateDB: (id: string) => {
    const db = get().getDataBase() || [];

    const workspace = {
      id: id,
      name: get().name,
      tasks: get().tasks,
      boards: get().boards,
    };
    if (db.length === 0) {
      const newDB: database = [workspace];
      localStorage.setItem("workspaces", JSON.stringify(newDB));
      get().setWorkspacesList();
      return;
    }
    const newDB: database = db.map((ws) => {
      if (ws.id === id) {
        return workspace;
      }
      return ws;
    });

    localStorage.setItem("workspaces", JSON.stringify(newDB));
    get().setWorkspacesList();
  },
}));

export default useWorkspaceStore;
