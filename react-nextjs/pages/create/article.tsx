import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import 'draft-js/dist/Draft.css';
import ReturnTop from '../../components/returnTop';

class Article {
  id: number;
  title: string = "";
  author: string = "";
  content: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  userId: string = "";
};

const ContactForm = (
  <form
    name="contact-form"
    method="POST"
    action="http://localhost:3000/v1/create/article"
  >

    <label htmlFor="name">author</label>
    <input
      id="author"
      name="author"
      required
      type="text"
    /><br/>
    <label htmlFor="title">title</label>
    <input id="title" name="title" required type="text" />
    <br/>
    <label htmlFor="content">content</label>
    <textarea id="content" name="content" required></textarea>
    <br></br>
		<label htmlFor="email">email</label>
    <input id="email" type="email" name="email" required />

    <button type="submit">Submit</button>
  </form>
);

// function MyEditor() {
// 	const [editorState, setEditorState] = React.useState(
// 		() => EditorState.createEmpty()
// 		);
// 	return <Editor editorState={editorState} onChange={setEditorState} />;
// }

const Home: NextPage = () => {
  // const [articles, setArticles] = useState<Article[]>([]);

  return (
    <>
      <ReturnTop />
			<br></br>
			{/* <MyEditor /> */}
      {ContactForm}
    </>
  )
}

export default Home;