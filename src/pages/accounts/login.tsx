import { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
      <h1 className=" text-center">New users login page coming soon.</h1>
      <div>
        <Link className="text-maroon underline" href="/accounts/register">
          Create New Account
        </Link>
      </div>
    </>
  );
};

export default Login;
