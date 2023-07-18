import { SignIn } from "@clerk/nextjs";
import Header from "~/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <SignIn />
    </>
  );
}
