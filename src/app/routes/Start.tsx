import { useNavigate } from "react-router";

function Start() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Start Page</h1>
      <button
        onClick={() => {
          navigate("/createworkspace");
        }}
      >
        Get Started
      </button>
    </main>
  );
}
export default Start;
