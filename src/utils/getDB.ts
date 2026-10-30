import type { database } from "../types/workspace";

export default function getDBfromLocalStorage() {
  const rawDB =
    localStorage.getItem("workspaces") ||
    localStorage.setItem("workspaces", JSON.stringify([]));
  const db: database = JSON.parse(rawDB || "[]");
  return db;
}
