import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const fetcher = (url: string) => fetch(url).then(r => r.json());

class Article{
  id: number=0;
  title: string = "";
  author: string = "";
  content: string = "";
  // avatar: ??? = ???;
}
class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
  // avatar: ??? = ???;
}

const Home: NextPage = () => {

  const [article, setArticle] = useState<Article>();

  const router = useRouter()
  const { id } = router.query;

  useEffect(() => {
  if (typeof id === "string"){
    async function fetchData(): Promise<void> {
      try {const { post } = await fetch(`http://localhost:3000/articles/${id}`).then(res => res.json()).catch(err => console.log(err));
        setArticle(post);} catch (err) {
        console.log(err);
      }
    };
    fetchData();
  } else {
    console.log("id is not a string");
  }
  }, []);

  // const [reviews, setReviews] = useState<Review[]>([
  //   {
  //     author: "龍之介",
  //     nameDisplay: true,
  //     content: "2行目の「郊外のぎらぎらひかる草の波」の出典を明記してください"
  //   },
  //   {
  //     author: "諭吉",
  //     nameDisplay: false,
  //     content: "「イーハトーヴォ」が分からないので説明してください。"
  //   }
  // ]);
   const [loginName, setLoginName] = useState<string>("鴎外");

  return (
    <div>
      <div>
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
        />
        <div
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
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default Home;