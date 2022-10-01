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
    router.push("/");
  }

  if (status==="authenticated") {
  return (
    <>
    <div className="text-2xl m-2">記事を作成</div>
    <div className="m-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tr>
            <td>ペンネーム :</td>
            <td><input className="rounded border-2 p-1 m-1 w-full" {...register('penName', {required: true})} /></td>
          </tr>
          <tr>
            <td>記事のタイトル : </td>
            <td><input className="rounded border-2 p-1 m-1 w-full" {...register('title', {required: true})} /></td>
          </tr>
          <tr>
            <td>内容 :</td>
            <td><textarea className="rounded border-2 p-1 m-1 w-full" {...register('content', {required: true})} /></td>
          </tr>
          <tr>
            <td>分類 :</td>
            <td>
              <select className="rounded border-2 p-1 m-1" {...register('classification', {required: true})}>
              <option value="all">all</option>
              <option value="national">national</option>
              <option value="international">international</option>
              <option value="economics">economics</option>
              <option value="information">information</option>
              <option value="science">science</option>
              <option value="sports">sports</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><input className="cursor-pointer rounded-md p-1 m-1 w-full bg-sky-100 hover:bg-sky-200" type="submit" /></td>
          </tr>
        </table>
          {errors.title && <span>title is required</span>}
        {/* {errors.content && <span>content is required</span>} */}
        {/* <input {...register('email', {required: true})} placeholder="email" /> */}
        {/* {errors.email && <span>email is required</span>} */}
        {errors.classification && <span>classification is required</span>}
        <input {...register('email', {required: true})} type="hidden" value={session?.user?.email?.toString()} />
        <input {...register('name', {required: true})} type="hidden" value={session?.user?.name?.toString()} />
      </form>
    </div>
    </>
  )}
  return (
    <>
    </>
  )
}
