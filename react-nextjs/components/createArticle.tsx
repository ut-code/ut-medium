// type Article = {
// 	id: number;
// 	title: string;
// 	author: string;
// 	content: string;
// 	createdAt: string;
// 	updatedAt: string;
// 	userId: string;
// 	classification: string;
// }
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

export default function App(props: {session: any, status: string}) {
	const router = useRouter();
	const {register, handleSubmit, formState: {errors},} = useForm<Article>();
	const onSubmit: SubmitHandler<Article> = async (data) => {
		console.log(data.author);
		const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/create/article`
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
		router.push("/");
	}

	return (
		<>
		{props.status==="authenticated" && props.session.user.name}
		{props.status==="authenticated" || "not logged in"}
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('author', {required: true})} placeholder="author" />
			{errors.author && <span>author is required</span>}
			<input {...register('title', {required: true})} placeholder="title" />
			{errors.title && <span>title is required</span>}
			<input {...register('content', {required: true})} placeholder="content" />
			{errors.content && <span>content is required</span>}
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
		</form>
		</>
	)
}