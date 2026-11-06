import { useEffect } from "react";
import { useNavigate } from "react-router";
import getDBfromLocalStorage from "../../utils/GetDatabase";
import AnchorBtn from "../../components/ui/button/navButton";

export default function Start() {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const workspaces = getDBfromLocalStorage();
      if (workspaces.length > 0) navigate(`/${workspaces[0].id}`);
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);
  return (
    <main>
      <h1>Start Page</h1>
      <AnchorBtn to="/createWorkspace">Get Started</AnchorBtn>
    </main>
  );
}
