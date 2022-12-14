import { NextPage } from "next";
import HomeHeader from "../components/homeHeader";

const HomePage: NextPage = () => {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 mt-5">
      <h1 className="text-xl font-bold">Home</h1>
      <p className="text-2xl mt-3">
        Welcome to CodeDevils! We are a virtual club that aims to bring ASU students together.
      </p>
      <HomeHeader />
    </main>
  );
};

export default HomePage;