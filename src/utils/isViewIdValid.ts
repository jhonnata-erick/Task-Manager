export function isViewValid(view: string | undefined) {
  if (!view) return false;
  const validViews = new Set<string>(["overview", "list", "kanban", "graph"]);
  return validViews.has(view);
}
