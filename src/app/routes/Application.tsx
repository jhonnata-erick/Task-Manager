import { useNavigate, useParams } from "react-router";
import AppViewLayout from "../../components/layout/app/AppViewLayout";
import useWorkspaceStore from "../../store/useWorkspaceStore";
import { useEffect, useState } from "react";
import Workspace from "./Workspace";

function Application() {
  const { id, view } = useParams<{ id: string; view: string }>();
  const [state, setState] = useState<"idle" | "success" | "loading" | "error">(
    "idle",
  );
  const navigate = useNavigate();
  const setWorkspace = useWorkspaceStore((s) => s.application.setWorkspaceData);
  useEffect(() => {
    setState("loading");
    if (validateWorkspaceId(id)) {
      setWorkspace(id!);
      setState("success");
      if (!view) navigate("overview");
    } else {
      setState("error");
    }
  }, [setWorkspace, id, navigate]);
  if (state === "error") return <>Error...</>;
  if (state === "loading") return <>Loading...</>;
  if (state === "success")
    return (
      <AppViewLayout>
        <Workspace />
      </AppViewLayout>
    );
  return <>Wait</>;
}
function validateWorkspaceId(id: string | undefined) {
  const regex = /^workspace-(\d+)$/;
  const test = regex.test(id || "");
  return test;
}
export default Application;
