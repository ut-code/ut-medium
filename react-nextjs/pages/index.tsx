import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import getData from '../components/getData';
import Header from "../components/header";

class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
}

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

function ListArticles(props: {classification: string}) {
    const {data: posts} = getData<Post[]>('/v1/articles/classification/'+props.classification);

  return (
    <div className="flex flex-col m-4 divide-y">
      {posts?.map((post: Post) => (
        <div key={post.id} className="flex-none">
          <Link href={{pathname: `/articles/id/` + post.id}}>
            <a className="block p-2 hover:bg-gray-100">
              <div className="text-xl">
                <span className="border-b-2 border-gray-500">
                  {post.title}
                </span>
                <span className="ml-2 text-sm text-gray-500 align-baseline">
                  {post.penName}
                </span>
              </div>
              <div className="ml-1">

              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

function ClassificationSelect(props: any){
  const classificationDefinition = [
    {id: "all", label:"主要"},
    {id: "national", label:"国内"},
    {id: "international", label:"国際"},
    {id: "economics", label:"経済"},
    {id: "information", label:"情報"},
    {id: "science", label:"科学"},
    {id: "sports", label:"スポーツ"},
  ];

  return (
    <div className="\
      /*grid grid-cols-7 */ \
      flex divide-x \
      justify-items-stretch text-center \
    ">
      {
        classificationDefinition.map((c) => (
          <div key={c.id} className="flex-1">
            <div className={
              props.classification === c.id ?
                "bg-sky-100 hover:bg-sky-200 rounded-md mx-1"
              :
                "hover:bg-gray-100 rounded-md mx-1"
            }>
              <button className="w-full" onClick={() => {props.setClassification(c.id)}}>{c.label}</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

const Home: NextPage = () => {
  const [articles, setArticles] = useState<Post[]>([]);
  const [classification, setClassification] = useState<string>("all");

  const { data: session, status } = useSession();
  console.log(session);
  return (
    <>
      <Header session={session} status={status} location={""}/>

      <ClassificationSelect classification={classification} setClassification={setClassification} />

      <ListArticles classification={classification} />


      <div className="flex place-content-center gap-2">
        {status==="authenticated" && (session?.user?.email?.endsWith('@g.ecc.u-tokyo.ac.jp') || session?.user?.email?.endsWith('.alumni.u-tokyo.ac.jp')) &&
          <>
            <Link href={{pathname: '/create/article'}}>
              <a className="\
                items-center justify-center rounded-md p-2 \
                text-current hover:bg-sky-100 \
                border-2 border-sky-500 \
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white \
              ">
                Create Article
              </a>
            </Link>
          </>
        }
        {status==="authenticated" && session?.user?.email?.endsWith('1234hakataramen@g.ecc.u-tokyo.ac.jp') &&
          <>
            <Link href={{pathname: '/allData'}} >
              <a className="\
                items-center justify-center rounded-md p-2 \
                text-current bg-red-200 hover:bg-red-300 \
                border-2 border-red-500 \
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white \
              ">
                Show All Data
              </a>
            </Link>
          </>
        }
      </div>
			{status==="authenticated" && session?.user?.email?.endsWith('@g.ecc.u-tokyo.ac.jp') &&
			<Link href={{pathname: '/allData'}} >
				<a>Show all data</a>
			</Link>}
    </>
  )
}

export default Home
