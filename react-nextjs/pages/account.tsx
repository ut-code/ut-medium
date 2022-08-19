import { getSession, GetSessionParams, useSession } from "next-auth/react";

export default function Account (){
	const {data: session, status}	= useSession();
	if (status==='authenticated') {
		return (
			<>
				<p>{session.user?.email}</p>
				<p>{session.user?.name}</p>
			</>
		)
	} else {
	return (
		<div>
			<p>You are not signed in.</p>
		</div>
	)}
}

export const getServerSideProps = async (context: GetSessionParams | undefined) =>  {
	const session = await getSession(context)
	if (!session) {
		return {
			redirect: {
				destination: '/loginPage',
			}
		}
	}
	return {
		props: {session},
	}
}