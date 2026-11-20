import { useEffect } from "react";
import useWorkspaceStore from "../../store/useWorkspaceStore";
import { Outlet, useNavigate, useParams } from "react-router";

export const Workspace = () => {
  const { workspaceId } = useParams<{
    workspaceId: string;
  }>();
  const navigate = useNavigate();
  const setWorkspaceData = useWorkspaceStore(
    (s) => s.application.setWorkspaceData,
  );
  useEffect(() => {
    try {
      setWorkspaceData(workspaceId!);
    } catch {
      navigate("/notFound");
    }
  }, [setWorkspaceData, workspaceId, navigate]);
  console.log("workspace");
  return <Outlet />;
};
