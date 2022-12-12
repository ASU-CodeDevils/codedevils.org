import { NextPage } from "next";

const ErrorPage: NextPage = () => {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 mt-5">
        <h1 className="text-xl font-bold">Error</h1>
        <p className="text-2xl mt-3">
            Oops! Something went wrong.
        </p>
    </main>
  );
};

export default ErrorPage;