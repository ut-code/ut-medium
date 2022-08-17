
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

export default function App(props: {session: any, status: string}) {
	const router = useRouter();
	const {register, handleSubmit, formState: {errors},} = useForm<Post>();
	const onSubmit: SubmitHandler<Post> = async (data) => {
		// console.log(data.author);
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

	if (props.status==="authenticated") {
		return (<>
		<form onSubmit={handleSubmit(onSubmit)}>

			{/* <input {...register('author', {required: true})} placeholder="author" />
			{errors.author && <span>author is required</span>} */}

			<select {...register('author', {required: true})} placeholder="author">
				<option value={props.session.user.name}>{props.session.user.name}</option>
				<option value="ut-student">ut-student</option>
			</select>

			<input {...register('title', {required: true})} placeholder="title" />
			{errors.title && <span>title is required</span>}
			<input {...register('content', {required: true})} placeholder="content" />
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
			<input {...register('userId', {required: true})} type="hidden" value={props.session.user.id} />
		</form>
		</>)
	}
	return (
		<>
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('author', {required: true})} value="ut-medium" placeholder="ut-medium" />
			{errors.author && <span>author is required</span>}

			{/* <select {...register('author', {required: true})} placeholder="author">
				<option value={props.session.user.name}>{props.session.user.name}</option>
				<option value="ut-student">ut-student</option>
			</select> */}

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
			<input {...register('userId', {required: true})} type="hidden" value={undefined} />
		</form>
		</>
	)
}

// 	return (
// 		<>
// 		{/* {props.status==="authenticated" && props.session.user.name}
// 		{props.status==="authenticated" || "not logged in"} */}


// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<input {...register('author', {required: true})} placeholder="author" />
// 			{errors.author && <span>author is required</span>}
// 			<input {...register('title', {required: true})} placeholder="title" />
// 			{errors.title && <span>title is required</span>}
// 			<input {...register('content', {required: true})} placeholder="content" />
// 			{errors.content && <span>content is required</span>}
// 			{/* <input {...register('email', {required: true})} placeholder="email" /> */}
// 			{/* {errors.email && <span>email is required</span>} */}
// 			<select {...register('classification', {required: true})} placeholder="classification">
// 				<option value="all">all</option>
// 				<option value="national">national</option>
// 				<option value="international">international</option>
// 				<option value="economics">economics</option>
// 				<option value="information">information</option>
// 				<option value="science">science</option>
// 				<option value="sports">sports</option>
// 			</select>
// 			{errors.classification && <span>classification is required</span>}
// 			<input type="submit"/>
// 		</form>
// 		</>
// 	)
// }