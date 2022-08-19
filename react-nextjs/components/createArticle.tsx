import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";


export default function App() {
	const {data: session, status } = useSession()
	const router = useRouter();
	const {register, handleSubmit, formState: {errors}} = useForm<CreatePost>();
	const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}` + '/v1/create/article';

	const onSubmit: SubmitHandler<CreatePost> = async (data) => {
		console.log(data);
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
		// router.push("/");
	}

	if (status==="authenticated") {
	return (
		<>
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('penName', {required: true})} placeholder="ペンネーム" />
			<input {...register('title', {required: true})} placeholder="title" />
			{errors.title && <span>title is required</span>}
			<input {...register('content', {required: true})} placeholder="content" />
			{/* {errors.content && <span>content is required</span>} */}
			{/* <input {...register('email', {required: true})} placeholder="email" /> */}
			{/* {errors.email && <span>email is required</span>} */}
			<select {...register('classification', {required: true})} placeholder="classification">
				<option value="all">all</option>
				<option value="national">national</option>
				<option value="international">international</option>
				<option value="economics">economics</option>
				<option value="information">information</option>
				<option value="science">science</option>
				<option value="sports">sports</option>
			</select>
			{errors.classification && <span>classification is required</span>}
			<input type="submit"/>
			<input {...register('email', {required: true})} type="hidden" value={session?.user?.email?.toString()} />
			<input {...register('name', {required: true})} type="hidden" value={session?.user?.name?.toString()} />
		</form>
		</>
	)}
	return (
		<>
		</>
	)
}
