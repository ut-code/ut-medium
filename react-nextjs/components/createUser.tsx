import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App() {
	const {data: session, status } = useSession()
	const router = useRouter();
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
	}
	})
	return (
		<>
			createUser
		</>
	)
}
