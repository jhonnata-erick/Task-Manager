import { Link, type LinkProps } from "react-router";

interface AnchorProps extends LinkProps {
  children?: React.ReactNode | undefined;
  to: any;
}
function AnchorBtn({ children, className, ...props }: AnchorProps) {
  return (
    <Link
      className={
        "flex gap-1 items-center py-1 px-1 rounded-lg hover:bg-gray-2" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </Link>
  );
}
export default AnchorBtn;
