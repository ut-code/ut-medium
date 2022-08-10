import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';

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

const Home: NextPage = async () => {
  // const [article, setArticle] = useState<Article>({
  //   title: "吾輩は猫である",
  //   author: "夏目漱石",
  //   content: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す."
  // });

	//   const [articles, setArticles] = useState<Article[]>([
  //   {
  //   id: 0,
  //   title: "吾輩は猫である",
  //   author: "夏目漱石",
  //   content: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す."
  // },
  // {
  //   id: 1,
  //   title: "君の名は",
  //   author: "Shinkai Makoto",
  //   content: "東京の四ツ谷[注 2]に暮らす男子高校生・立花 瀧（たちばな たき）は、ある朝、目を覚ますと飛騨地方[13]の山深い田舎町である糸守町[注 3]に住む女子高生で宮水神社の巫女を務める宮水 三葉（みやみず みつは）になっており、逆に三葉は瀧になっていた。2人とも「奇妙な夢」だと思いながら、知らない誰かの一日を過ごす。"
  // },
  // {
  //   id: 2,
  //   title: "The Law of Return and the Right of Return",
  //   author: "Michael Sandel",
  //   content: "What it means to be free is to recognize certain moral ties we haven't chosen, ties bound up with history, membership, memory, then it's hard to separate the idea of obligations that point inward sometimes in and sometimes outward."
  // }]);

	const [article, setArticle] = useState<Article>();

	const router = useRouter()
	// useEffect(() => {
	// 	if (typeof id === "string"){
	//   setArticle(articles[parseInt(id)]);
	//   }}, [])

	if (typeof router.query.id === "string"){
		const { data } = await fetch(`localhost:3000/articles/${router.query.id}`).then(res => res.json()).catch(err => console.log(err));
		setArticle(data);
	}

  const [reviews, setReviews] = useState<Review[]>([
    {
      author: "龍之介",
      nameDisplay: true,
      content: "2行目の「郊外のぎらぎらひかる草の波」の出典を明記してください"
    },
    {
      author: "諭吉",
      nameDisplay: false,
      content: "「イーハトーヴォ」が分からないので説明してください。"
    }
  ]);
  const [loginName, setLoginName] = useState<string>("鴎外");

  return (
    <div>
      <div fixed>
        <div
          control={
            <div
              checked={loginName !== ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if(event.target.checked){
                  setLoginName("鴎外")
                }else{
                  setLoginName("");
                }
              }}
            />
          }
          label="ログイン(テスト用)"
        />
        <div
          variant="standard"
          label="ユーザー名(テスト用)"
          value={loginName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginName(event.target.value);
          }}
        />
        <span>← 夏目漱石 or 龍之介 or 諭吉 or それ以外を入力</span>

        <div spacing={2}>
          <div variant="h3">
          {article.title}
          </div>

          <div container spacing={2} alignItems="center">
            <div item>
              <div>
                N
              </div>
            </div>
            <div item xs>
              <div>
                {article.author}
              </div>
            </div>
            <div item xs={12} sm="auto" justifyContent="flex-end">
              <div
                variant="contained"
                sx={{display: (loginName === article.author ? "block" : "none")}}
              >
                編集
              </div>
            </div>
          </div>

          <div sx={{width:'100%', padding:3}}>
            <div variant="body1">
              {article.content}
            </div>
          </div>

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;