import cors from "cors";
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from "helmet";

dotenv.config()


if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app: express.Express = express()
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.listen(PORT, () => {
    console.log(`Start on port ${PORT}.`)
})

type User = {
    id: number
    name: string
    email: string
};

// const users: User[] = [
//     { id: 1, name: "User1", email: "user1@test.local" },
//     { id: 2, name: "User2", email: "user2@test.local" },
//     { id: 3, name: "User3", email: "user3@test.local" }
// ]
// class Article{
//   id: number;
//   title: string = "";
//   author: string = "";
//   content: string = "";
//   // avatar: ??? = ???;
// }

// let articles: Article[] = [
//     {
//     id: 0,
//     title: "吾輩は猫である",
//     author: "夏目漱石",
//     content: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す."
//   },
//   {
//     id: 1,
//     title: "君の名は",
//     author: "Shinkai Makoto",
//     content: "東京の四ツ谷[注 2]に暮らす男子高校生・立花 瀧（たちばな たき）は、ある朝、目を覚ますと飛騨地方[13]の山深い田舎町である糸守町[注 3]に住む女子高生で宮水神社の巫女を務める宮水 三葉（みやみず みつは）になっており、逆に三葉は瀧になっていた。2人とも「奇妙な夢」だと思いながら、知らない誰かの一日を過ごす。"
//   },
//   {
//     id: 2,
//     title: "The Law of Return and the Right of Return",
//     author: "Michael Sandel",
//     content: "What it means to be free is to recognize certain moral ties we haven't chosen, ties bound up with history, membership, memory, then it's hard to separate the idea of obligations that point inward sometimes in and sometimes outward."
//   }]

//一覧取得
app.get('/users', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(users))
})

// app.get('/article:id', (req: express.Request, res: express.Response) => {
//   res.send(articles[req.params.id].content)
// })