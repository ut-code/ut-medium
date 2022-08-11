import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

class Article {
  id: number;
  title: string = "";
  author: string = "";
  content: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  userId: string = "";
};

class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
  // avatar: ??? = ???;
}

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

function ListArticles() {
  // const [articles, setArticles] = useState<Article[]>([]);
  const { data, error } = useSWR('http://localhost:3000/articles', fetcher);
  return (
    <div>
      {data?.map((article: Article) => (
        <div key={article.id}>
          <Link href={{pathname: `/articles/${article.id}`}}>
            <div>
              <div>{article.title}</div>
              <div>{article.author}</div>
              <div>{article.content}</div>
            </div>
          </Link>

            {/* <div>{article.content}</div> */}
        <br></br>
        </div>
      ))}
    </div>
  );
}

const Home: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <>
      <ListArticles />
    </>
  )
  // const {data, error} = useSWR('http://localhost:3000/articles', fetcher);
  // // if (error) return <div>failed to load</div>;
  // // if (!data) return <div>loading...</div>;
  // return(
  // <>
  //   {data?.map((article: Article) => {
  //     return(
  //       <div key={article.id}>
  //         <h1>{article.title}</h1>
  //         <p>{article.content}</p>
  //         <p>{article.author}</p>
  //         <p>{article.createdAt}</p>
  //         <p>{article.updatedAt}</p>
  //         <p>{article.userId}</p>
  //         <br></br>
  //       </div>
  //     )
  //   })}
  // </>
  // )

  const [loginName, setLoginName] = useState<string>("鴎外");

  return (
    <div>
      <div>
        <div>ut medium</div>
        <div>logged in as {loginName}</div>

        <div>
          <div>学内</div>
          <div><div>主要</div><div>国内</div><div>国際</div><div>経済</div><div>情報</div><div>サークル</div><div>研究</div></div>
        </div>

        <div>
        <div>学外</div>
          <div><div>主要</div><div>国内</div><div>国際</div><div>経済</div><div>情報</div><div>エンタメ</div><div>科学</div></div>
        </div>

        <div className="">
          <div>学内 主要</div>
          {articles.map((article: Article, index: number) => {
            return (
              <div key={index}>
                <Link href={{pathname:`/articles/${article.id}`}}><div className="text-sky-500 dark:text-sky-400">{article.title}</div></Link>
                <div className="text-orange-500 dark:text-orange-400">{article.author}</div>
                <div>{article.content}</div>
                <br></br>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home