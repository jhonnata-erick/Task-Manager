import { Link, type LinkProps, type Path } from "react-router";

interface AnchorProperties extends LinkProps {
  children?: React.ReactNode;
  to: string | Partial<Path>;
}
function AnchorButton({
  children,
  className,
  ...properties
}: Readonly<AnchorProperties>) {
  return (
    <Link
      className={
        "flex gap-1 items-center py-1 px-1 rounded-lg hover:bg-gray-2" +
        " " +
        className
      }
      {...properties}
    >
      {children}
    </Link>
  );
}
export default AnchorButton;
