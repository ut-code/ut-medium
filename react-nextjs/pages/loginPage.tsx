import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import LoginButton from '../components/loginButton';
import ReturnTop from '../components/returnTop';

export default function Component() {
	const router = useRouter()
  const { data: session } = useSession()
	console.log(session)

	return (
		<>
			<ReturnTop /> <br />
			<LoginButton/> <br />
			<br />
			<button onClick={() => router.push('/createUser')}>createUser</button>
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

