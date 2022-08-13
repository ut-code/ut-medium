// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import ReturnTop from '../../components/returnTop';

// class Article{
//   id: number=0;
//   title: string = "";
//   author: string = "";
//   content: string = "";
//   createdAt: string = "";
//   updatedAt: string = "";
//   userId: string = "";
//   classification: string = "";
// }

interface Article {
	id: number;
	title: string;
	author: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	userId: string;
	classification: string;
}
class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
  // avatar: ??? = ???;
}


const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

function ListArticle(props: {id: number}) {
  const { data, error } = useSWR(`http://localhost:3001/v1/articles/${props.id}`, fetcher);
  return (
    <div>
      <div key={data?.id}>
          <div>
            <div>{data?.title}</div>
            <br></br>
            <div>{data?.author}</div>
            <br></br>
            <div>{data?.content}</div>
						<br/>
						<div>{data?.createdAt}</div>
						<div>{data?.updatedAt}</div>
						<div>{data?.userId}</div>
						<div>{data?.classification}</div>
          </div>
      <br></br>
      </div>
    </div>
  );
}


async function deletePost(props: {id: string}) {
	await fetch(`http://localhost:3001/v1/create/delete/${props.id}`)
}

const Home: React.FunctionComponent = () => {

  const [article, setArticle] = useState<Article>();

  const router = useRouter()
  const { id } = router.query;


   const [loginName, setLoginName] = useState<string>("鴎外");

	 const handleClick = async (id: string) => {
		await deletePost({id: id})
		router.push('/')
	}

  return (
    <div>
			<ReturnTop />

     <br/>

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

			{typeof id === "string" && <button onClick={() => {handleClick(id)}}><a>id: {id}を削除</a></button>}

    </div>
  )
}

export default Home;