import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react';

class Article{
  id: number;
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
  const [articles, setArticles] = useState<Article[]>([
    {
    id: 0,
    title: "吾輩は猫である",
    author: "夏目漱石",
    content: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す."
  },
  {
    id: 1,
    title: "君の名は",
    author: "Shinkai Makoto",
    content: "東京の四ツ谷[注 2]に暮らす男子高校生・立花 瀧（たちばな たき）は、ある朝、目を覚ますと飛騨地方[13]の山深い田舎町である糸守町[注 3]に住む女子高生で宮水神社の巫女を務める宮水 三葉（みやみず みつは）になっており、逆に三葉は瀧になっていた。2人とも「奇妙な夢」だと思いながら、知らない誰かの一日を過ごす。"
  },
  {
    id: 2,
    title: "The Law of Return and the Right of Return",
    author: "Michael Sandel",
    content: "What it means to be free is to recognize certain moral ties we haven't chosen, ties bound up with history, membership, memory, then it's hard to separate the idea of obligations that point inward sometimes in and sometimes outward."
  }]);

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
          {articles.map((article, index) => {
            return (
              <div key={index}>
                <Link href={{pathname:`/article/${article.id}`, query: {id: article.id}}}><div className="text-sky-500 dark:text-sky-400">{article.title}</div></Link>
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