import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession()
	console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
				{/* Name {session.user.name} <br/> */}
				{/* <img src={session?.user?.image} alt="" className=""/> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

// export default function login() {
//   const { data: session } = useSession()

// 	if (session) {
// 		return (
// 			<>
// 			<p>{session.user?.email}</p>
// 			<p>Welcome</p>
// 			<button onClick={() => signOut()}>Sign out</button>
// 			</>
// 		)
// 	} else {
// 		return (
// 			<>
// 				<p>You are not signed in.</p>
// 				<button onClick={() => signIn()}>Sign in</button>
// 			</>
// 		)
// 	}
// }

