export default function createId(type: string) {
  return `${type}-${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;
}
