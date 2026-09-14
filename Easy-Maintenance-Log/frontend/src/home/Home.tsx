import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section id="all">
        <section id="banner">
          <h1>Welcome to Easy Maintenance Log</h1>
        </section>
        <section id="buttons">
          <button>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </section>
      </section>
    </>
  );
}

export default Home;
