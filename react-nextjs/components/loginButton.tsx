import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

// const prisma = new PrismaClient();

export default function LoginButton() {
  const { data: session } = useSession()

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}` + '/v1/create/user';
  // const url = "http://localhost:3001/v1/create/user";
  // const [json, useJson] = useState<String>("")

  useEffect(() => {
    if (typeof session?.user?.name === "string" && typeof session?.user?.email === "string") {
    const createUser = async () => {
      await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: session?.user?.name, email: session?.user?.email})
      });
    };
    createUser();
    }})
  if (session) {
    return (
      <>
        You are successfully signed in! <br />{session.user?.email}<br /> {session.user?.name} <br /><br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => {signIn();}}>Sign in</button>
    </>
  )
}