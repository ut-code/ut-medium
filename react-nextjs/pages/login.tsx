import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import ReturnTop from '../components/returnTop';

export default function Component() {
	const router = useRouter()
  const { data: session } = useSession()
	console.log(session)
	const onClickSignIn = () => {
		signIn()
		router.push('/')
	}
	const onClickSignOut = () => {
		signOut()
		router.push('/')
	}
  if (session) {
    return (
      <>
				<ReturnTop /><br/>
        Signed in as {session?.user?.email} <br />
				{/* Name {session.user.name} <br/> */}
				{/* <img src={session?.user?.image} alt="" className=""/> */}
        <button onClick={() => onClickSignOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
			<ReturnTop /><br/>
      Not signed in <br />
      <button onClick={() => onClickSignIn()}>Sign in</button>
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

