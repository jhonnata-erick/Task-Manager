export function Header({
  title,
  canClose,
}: {
  title: string;
  canClose?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b pb-3">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {canClose && (
        <button className="text-gray-400 hover:text-gray-600">x</button>
      )}
    </div>
  );
}
