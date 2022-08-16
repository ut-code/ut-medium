import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from 'express';

const client = new PrismaClient();


if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app: express.Express = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`Start on port ${PORT}.`)
})


app.get('/v1', async (req: express.Request, res: express.Response) => {
  let posts = await client.post.findMany()
  res.send(posts)
})

// app.get('/v1/articles', async (req: express.Request, res: express.Response) => {
//   let posts = await client.post.findMany()
//   res.send(posts)
// })

// app.get('/v1/articles', async(req: express.Request, res: express.Response) => {
// 	const {id, classification} = req.params
// 	if (id === "string") {
// 		const posts = await client.post.findMany({
// 			where: {
// 				id: parseInt(id),
// 			}
// 		})
// 		res.send(posts)
// 		return
// 	} else if (classification === "string") {
// 		const posts = await client.post.findMany({
// 			where: {
// 				classification: classification,
// 			}
// 	})
// 		res.send(posts)
// 		return
// 	} else {
// 		const posts = await client.post.findMany()
// 		res.send(posts)
// 		return
// 	}
// })

// app.get('/v1/articles', async(req: express.Request, res: express.Response) => {
// 	const post = await client.post.findMany()
// 	res.send(post)
// })

app.get('/v1/articles/classification/:classification', async(req: express.Request, res: express.Response) => {
	const {classification} = req.params;
	if (typeof classification === "string") {
		if (classification === "all") {
			const posts = await client.post.findMany()
			res.send(posts)
			return
		} else {
		const posts = await client.post.findMany({
				where: {
					classification: classification,
				}
			})
			res.send(posts)
			return
		}
	} else {
		res.send("error")
	}
})

app.get('/v1/articles/', async(req: express.Request, res: express.Response) => {
	const {id, classification} = req.query;
	if (id === "null" && classification === "null") {
		const posts = await client.post.findMany()
		res.send(posts)
		return
	} else if (typeof id === "string") {
		const posts = await client.post.findMany({
			where: {
				id: parseInt(id),
			}
		})
		res.send(posts)
		return
	}else if (typeof classification === "string") {
		const posts = await client.post.findMany({
			where: {
				classification: classification,
			}
		})
		res.send(posts)
		return
	}
	}
)

app.get('/v1/articles/id/:id', async (req: express.Request, res: express.Response) => {
  const {id} = req.params;
	if (typeof id === 'string') {
		let post = await client.post.findUnique({
			where: {
				id: parseInt(id, 10)
			}
		})
		res.send(post)
	} else {
		res.send("error")
	}
})

app.get('/v1/create/delete/:id', async(req: express.Request, res: express.Response) => {
	const {id} = req.params;
	if (typeof id === 'string') {
		let post = await client.post.delete({
			where: {
				id: parseInt(id, 10)
			}
		})
	res.send(`${post} delete successfully`)}
	else {
		res.send("error")
	}
})


app.post('/v1/create/article', async (req: express.Request, res: express.Response) => {
	const {title, author, email, content, classification} = req.body;
	let post = await client.post.create({
		data: {
			title: title,
			author: author,
			// email,
			content: content,
			classification: classification,
		}
	})
	res.send("create successfully")
})
