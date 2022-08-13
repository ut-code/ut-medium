import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from 'express';

const client = new PrismaClient();

// class Article {
//   id: number;
//   title: string = "";
//   author: string = "";
//   content: string = "";
//   createdAt: string = "";
//   updatedAt: string = "";
//   userId: string = "";
// };

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


class Article{
  id: number=0;
  title: string = "";
  author: string = "";
  content: string = "";
  // avatar: ??? = ???;
}

app.get('/v1', async (req: express.Request, res: express.Response) => {
  let posts = await client.post.findMany()
  res.send(posts)
})

app.get('/v1/articles', async (req: express.Request, res: express.Response) => {
  let posts = await client.post.findMany()
  res.send(posts)
})


app.get('/v1/articles/:id', async (req: express.Request, res: express.Response) => {
  const {id} = req.params;
	if (typeof id === 'string') {
		let post: Article | null = await client.post.findUnique({
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
		let post: Article | null = await client.post.delete({
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
	const {title, author, email, content} = req.body;
	let post = await client.post.create({
		data: {
			title: title,
			author: author,
			// email,
			content: content,
		}
	})
	res.redirect('http://localhost:8080')
})
