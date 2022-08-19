import { useSession } from "next-auth/react";

export default function AccessToken() {
	const {data: session} = useSession()
	// const {accessToken} = session
	if (session) {
		return (
			<>
				{session.accessToken}
				{session.user?.email}
				{session.user?.name}
			</>
		)
	}
	return (
		<>
			Not signed in
		</>
	)
}
