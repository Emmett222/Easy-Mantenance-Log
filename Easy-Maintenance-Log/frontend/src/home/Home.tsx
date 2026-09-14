import "./Home.css";
import HomeNav from "../components/HomeNav";

function Home() {
  return (
    <>
    <HomeNav />
      <section id="all">
        <section id="banner">
          <h1>Welcome to Easy Maintenance Log</h1>
          <h2>What is Easy Maintenance Log?</h2>
          <p>
            This website is a place to store data about your car's maintenance.
            Store details about your servicing and get emails when it's time to
            do said service again. Time the emails with milage or time.
          </p>
        </section>
      </section>
    </>
  );
}

export default Home;
