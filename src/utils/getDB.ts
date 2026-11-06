import type { Database } from "../types/workspace";

export default function getDBfromLocalStorage() {
  const rawDB =
    localStorage.getItem("workspaces") ||
    localStorage.setItem("workspaces", JSON.stringify([]));
  const database_: Database = JSON.parse(rawDB || "[]");
  return database_;
}
