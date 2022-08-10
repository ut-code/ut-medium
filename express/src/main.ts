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


class Article{
  id: number=0;
  title: string = "";
  author: string = "";
  content: string = "";
  // avatar: ??? = ???;
}

app.get('/', async (req: express.Request, res: express.Response) => {
  let posts = await client.post.findFirst()
  res.send(posts)
})

app.get('/articles', async (req: express.Request, res: express.Response) => {
  let posts = await client.post.findFirst()
  res.send(posts)
})


app.get('/articles/:id', async (req: express.Request, res: express.Response) => {
  const {id} = req.params;
    console.log(id)
    console.log(typeof id)
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
