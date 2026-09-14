import "./Register.css";
import HomeNav from "../components/HomeNav";

function Register() {
  return (
    <>
      <HomeNav />
      <section id="banner">
        <h1>Register an account</h1>
      </section>
      <section id="inputs">
        <p>Email:</p>
        <input type="text" id="email" name="email" />
        <p>Username:</p>
        <input type="text" id="username" name="username" />
        <p>Password:</p>
        <input type="text" id="password" name="password" />
        <p>Confirm password:</p>
        <input type="text" id="confirmPassword" name="confirmPassword" />
      </section>
      <section id="buttons">
        <button id="submit">Submit</button>
      </section>
    </>
  );
}

export default Register;
