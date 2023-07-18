import { SignUp } from "@clerk/nextjs";
import Header from "~/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
}
