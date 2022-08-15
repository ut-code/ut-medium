import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import useDataByClassification from '../components/useDataByClassification';
import UtcodeImage from '../public/utc-logo.svg';

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

	// const url = `${process.env.BACKEND_URL}/v1/articles/classification/${props.classification}`;

  // const { data, error } = useSWR(url, fetcher);

	// const { data, error } = useSWR(`https://ut-medium.onrender.com/v1/articles`, fetcher);

	// const { data, error } = useSWR(`http://localhost:3001/v1/articles/classification/${classification}`, fetcher);

	const { dataByClassification, isLoading, isError } = useDataByClassification(props.classification);

	// const { data, error } = useSWR({url}, fetcher);

	return (
    <div>
      {dataByClassification?.map((article: Article) => (
        <div key={article.id}>
          <Link href={{pathname: `/articles/id/${article.id}`}}>
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
			<Image src={UtcodeImage} width={100} height={40}/>
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