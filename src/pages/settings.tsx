// pages/profile.tsx
import { UserButton } from "@clerk/nextjs";
import Header from "~/components/Header";

export default function Example() {
  return (
    <>
      <Header />

      <UserButton afterSignOutUrl="/" />

      <div>Your page&apos;s content can go here.</div>
    </>
  );
}
