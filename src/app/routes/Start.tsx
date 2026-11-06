import { useEffect } from "react";
import { useNavigate } from "react-router";
import getDBfromLocalStorage from "../../utils/getDB";
import AnchorBtn from "../../components/ui/button/nav-button";

function Start() {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const workspaces = getDBfromLocalStorage();
      workspaces.length > 0 ? navigate(`/${workspaces[0].id}`) : false;
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <main>
      <h1>Start Page</h1>
      <AnchorBtn to="/createWorkspace">Get Started</AnchorBtn>
    </main>
  );
}
export default Start;
