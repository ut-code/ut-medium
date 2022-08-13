import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

// class Article {
// 	id: number;
//   title: string = "";
//   author: string = "";
//   content: string = "";
//   createdAt: string = "";
//   updatedAt: string = "";
//   userId: string = "";
// };

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

function ListArticles(props: {classification: string}) {
  // const [articles, setArticles] = useState<Article[]>([]);
	let url: string;
	if (props.classification === "all") {
		url = "http://localhost:3001/v1/articles";
	} else {
		url = `http://localhost:3001/v1/articles/classification/?classification={props.classification}`;
	}

  const { data, error } = useSWR(url, fetcher);

	return (
    <div>
      {data?.map((article: Article) => (
        <div key={article.id}>
          <Link href={{pathname: `/articles/${article.id}`}}>
            <div>
              <div className="underline"><a>{article.title}</a></div>
              <div>{article.author}</div>
            </div>
          </Link><br/>
        </div>
      ))}
    </div>
  );
}


const Home: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
	const [classification, setClassification] = useState<string>("all");

  return (
    <>
      <div className="grid grid-cols-7 divide-x">
				<div><button onClick={() => {setClassification("all")}}>主要</button></div>
				<div><button onClick={() => {setClassification("national")}}>国内</button></div>
				<div><button onClick={() => {setClassification("international")}}>国際</button></div>
				<div><button onClick={() => {setClassification("economics")}}>経済</button></div>
				<div><button onClick={() => {setClassification("information")}}>情報</button></div>
				<div><button onClick={() => {setClassification("science")}}>科学</button></div>
				<div><button onClick={() => {setClassification("sports")}}>スポーツ</button></div>
			</div>
			<br/>

      <ListArticles classification={classification} />

      <Link href={{pathname: '/create/article'}}>
        <a>Create Article</a>
      </Link>

			{/* <Link href={{pathname: '/create/review'}}>
				<a>Create Review</a>
			</Link> */}
    </>
  )
}

export default Home