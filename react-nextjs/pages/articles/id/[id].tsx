import { useRouter } from 'next/router';
import getData from '../../../components/getData';
import ReturnTop from '../../../components/returnTop';
import {format} from "date-fns";
import Header from "../../../components/header";
import { useSession } from 'next-auth/react';

class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
}

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

function ListArticle(props: {id: number}) {
  const {data: post, isLoading, isError} = getData<Post>('/v1/articles/id/' + props.id.toString());
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div className="grid grid-cols-2 divide-x m-2">
      <div key={post?.id}>
          <div>
            {/* <div>賛成側意見</div><br/> */}
            <div className="text-2xl">
              <span className="border-b-2 border-gray-500">
                {post?.title}
              </span>
            </div>
            <div className="ml-4 mt-2">
              <div>
                Author: {post?.penName}
              </div>
              <div>
                createdAt: {post?.createdAt && format(new Date(post?.createdAt), "yyyy/M/d (E) H:mm:ss")}
              </div>
              <div>classification: {post?.classification}</div>
            </div>
            <div className="mt-4">{post?.content.split("\n").map((text) => (<p>{text}</p>))}</div>
            {/* <div>{post?.updatedAt}</div> */}
            {/* <div>{post?.userId}</div> */}
          </div>
      </div>

      {/* <div key={dataById?.id}>
          <div>
            <div>反対側意見</div><br/>
            <div>{dataById?.title}</div>
            <br></br>
            <div>{dataById?.author}</div>
            <br></br>
            <div>{dataById?.content}</div>
            <br/>
            <div>{dataById?.createdAt}</div>
            <div>{dataById?.updatedAt}</div>
            <div>{dataById?.userId}</div>
            <div>{dataById?.classification}</div>
          </div><br/>
      </div> */}
      </div>
    </div>
  );
}

async function deletePost(props: {id: string}) {
	const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}` + '/v1/articles/' + props.id;
	await fetch(url, {method: 'DELETE'});
ter
}

const Home: React.FunctionComponent = () => {


  const router = useRouter()
  const { id } = router.query;


    const handleClick = async (id: string) => {
    await deletePost({id: id})
    router.push('/')
  }

  const { data: session, status } = useSession();

  return (
    <div>
      <Header location="/ View Article" session={session} status={status}/>

      {typeof id === "string" && <ListArticle id={parseInt(id)} />}
      {/* <div>{article?.id}</div>
      <div>{article?.title}</div>
      <div>{article?.author}</div>
      <div>{article?.content}</div> */}
      {/* <div>
        <div
          // control={
          //   <div
          //     checked={loginName !== ""}
          //     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          //       if(event.target.checked){
          //         setLoginName("鴎外")
          //       }else{
          //         setLoginName("");
          //       }
          //     }}
          //   />
          // }
          label="ログイン(テスト用)"
        /> */}
        {/* <div
          value={loginName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginName(event.target.value);
          }}
        />
        <span>← 夏目漱石 or 龍之介 or 諭吉 or それ以外を入力</span>
        <div>
          <div>
            {article && article.id}
          </div>
          <div>
          {article?.title}
          </div>
          <div>
            <div>
              <div>
                N
              </div>
            </div>
            <div>
              <div>
                {article?.author}
              </div>
            </div>
            <div>
              <div>
                編集
              </div>
            </div>
          </div>

          <div>
            <div>
              {article?.content}
            </div>
          </div> */}
{/*
          <div container spacing={2} alignItems="center">
            <div item>
              <div variant="h5">
              {reviews.length} 件の提案
              </div>
            </div>
            <div item xs>
              <div
                variant="outlined"
                disabled={loginName === article.author}
                sx={{display: (loginName !== "" ? "block" : "none")}}
              >
                提案を投稿
              </div>
            </div>
          </div>

          {reviews.map((rev: Review) => (
            <div key={rev.content} sx={{width:'100%', padding:2}}>
              <div container spacing={2} alignItems="center">
                <div item>
                  <div>
                    a
                  </div>
                </div>
                <div item xs>
                  <div>
                    {rev.nameDisplay ? rev.author : "名前非公開"}
                  </div>
                </div>
                <div item xs={12} sm="auto" justifyContent="flex-end">
                  <div
                    variant={"contained"}
                    sx={{display: (loginName === rev.author ? "block" : "none")}}
                  >
                    編集
                  </div>
                </div>
                <div item xs={12}>
                  {rev.content}
                </div> */}
              {/* </div>
            </div>
          ))} */}
        {/* </div>
      </div> */}

      <div className="ml-2 mt-4">
        {typeof id === "string" &&
          <button onClick={() => {handleClick(id)}}>
            <a className="\
            items-center justify-center rounded-md p-2 \
            text-current hover:bg-red-100 \
            border-2 border-red-500 \
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white \
            ">
              この記事を削除
            </a>
          </button>
        }
      </div>

    </div>
  )
}

export default Home;
