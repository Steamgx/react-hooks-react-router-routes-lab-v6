import NavBar from "../components/NavBar.jsx";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Oops! Looks like something went wrong.</h1>
    </>
  );
}

export default ErrorPage;