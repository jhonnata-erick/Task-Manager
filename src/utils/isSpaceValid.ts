export function isSpaceValid(space: string | undefined) {
  if (!space) return false;
  const validViews = new Set<string>(["board"]);
  return validViews.has(space);
}
