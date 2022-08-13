import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()


async function main() {
	await client.post.deleteMany()
  await client.post.create({
      data: {
    title: "吾輩は猫である",
    author: "夏目漱石",
    content: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す.",
    classification: "national",
	}
  })
  await client.post.create({
      data: {
    title: "君の名は",
    author: "Shinkai Makoto",
    content: "東京の四ツ谷[注 2]に暮らす男子高校生・立花 瀧（たちばな たき）は、ある朝、目を覚ますと飛騨地方[13]の山深い田舎町である糸守町[注 3]に住む女子高生で宮水神社の巫女を務める宮水 三葉（みやみず みつは）になっており、逆に三葉は瀧になっていた。2人とも「奇妙な夢」だと思いながら、知らない誰かの一日を過ごす。",
    classification: "national",
	}
  })
	  await client.post.create({
      data: {
    title: "The Law of Return and the Right of Return",
    author: "Michael Sandel",
    content: "What it means to be free is to recognize certain moral ties we haven't chosen, ties bound up with history, membership, memory, then it's hard to separate the idea of obligations that point inward sometimes in and sometimes outward.",
		classification: "international",
  }
  })
	await client.post.create({
			data: {
				title: "hello world",
				author: "robot",
				content: "hello world",
				classification: "information",
			}
	})
	await client.post.create({
			data:{
				title: "physics",
				author: "yamanaka shinya",
				content: "f = ma",
				classification: "science",
			}
	})

	const posts = await client.post.findMany()
	console.log(posts)
}

main()
  .then(async () => {
    await client.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await client.$disconnect()
    process.exit(1)
  })