import { signIn, signOut, useSession } from "next-auth/react";

// const prisma = new PrismaClient();

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
		// router.push('/createUser')
		// async () => {
		// const userCount = await prisma.user.count({
		// 	where: {
		// 		email: session.user?.email
		// 	}
		// })
		// if (userCount === 0) {
		// 	await prisma.user.create({
		// 		data: {
		// 			email: session.user?.email,
		// 			name: session.user?.name
		// 		}
		// 	})
		// 	console.log("User created")
		// }}
    return (
      <>
        Signed in as {session.user?.email} {session.user?.name} <br />
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