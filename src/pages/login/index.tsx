import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginPage() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="font-semibold">Hi there!</h1>
        <h3 className="font-semibold">Signed in as {session.user?.email}</h3>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Not signed in </h1>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}


