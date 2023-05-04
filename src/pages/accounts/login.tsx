import { type NextPage } from "next";
import Link from "next/link";

// styles
import pageStyles from "./../../styles/pages/layout.module.scss";

const Login: NextPage = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <h1 id={pageStyles.description}>New users login page coming soon.</h1>
      <div id={pageStyles.button_wrapper}>
        <Link className={pageStyles.register} href="/accounts/register">
          {" "}
          {/* href="/accounts/register" */}
          Create New Account
        </Link>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Login;
