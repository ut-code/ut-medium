import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import getData from '../components/getData';
import UtcodeImage from '../public/utc-logo.png';

class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
}

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

function ListArticles(props: {classification: string}) {
		const {data: posts} = getData<Post[]>('/v1/articles/classification/'+props.classification);

	return (
    <div>
      {posts?.map((post: Post) => (
        <div key={post.id}>
          <Link href={{pathname: `/articles/id/` + post.id}}>
            <div>
              <div className="underline"><a>{post.title}</a></div>
              <div>{post.penName}</div>
            </div>
          </Link><br/>
        </div>
      ))}
    </div>
  );
}

function ShowLoginStatus (props: {session: any, status: string}) {
	if (props.status==="authenticated") {
		return (
			<div>
				<div className="ml-10">{props.session.user.name}</div>
			</div>
		)
	}
	return (
		<div>
			<span>   Not Logged in </span>
		</div>
	)
}


const Home: NextPage = () => {
  const [articles, setArticles] = useState<Post[]>([]);
	const [classification, setClassification] = useState<string>("all");
	const { data: session, status } = useSession();
	console.log(session);
  return (
    <>
			<div className="flex">
				<Image height={827/30} width={3957/30} src={UtcodeImage} alt="image"/>
				<ShowLoginStatus session={session} status={status} />
				<div className="ml-10">
					<Link className="" href={{pathname: "/loginPage"}}><a>login</a></Link>
				</div>
			</div>

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


      {status==="authenticated" && session?.user?.email?.endsWith('@g.ecc.u-tokyo.ac.jp') && <><Link href={{pathname: '/create/article'}}>
        <a>Create Article</a>
      </Link><br/><br/></>}

			{status==="authenticated" && session?.user?.email?.endsWith('1234hakataramen@g.ecc.u-tokyo.ac.jp') &&
			<Link href={{pathname: '/allData'}} >
				<a>Show all data</a>
			</Link>}
    </>
  )
}

export default Home
