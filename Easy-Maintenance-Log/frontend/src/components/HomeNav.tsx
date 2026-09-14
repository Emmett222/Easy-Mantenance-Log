import "./HomeNav.css";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const navigate = useNavigate();
  return (
    <>
      <button>Example</button>
      <button>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </>
  );
}

export default HomeNav;
