import { Navigate, useParams } from "react-router";
import { Kanban } from "../../kanban/Kanban";
import { isViewValid } from "../../../utils/isViewIdValid";

export const TabManager = () => {
  const { tab } = useParams<{ tab: string }>();
  const view = isViewValid(tab);
  if (!view) return <Navigate to="/notFound" />;

  if (tab === "kanban") return <Kanban />;
  return <>WIP</>;
};
