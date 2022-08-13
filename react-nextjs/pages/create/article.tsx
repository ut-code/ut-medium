import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import 'draft-js/dist/Draft.css';
import ReturnTop from '../../components/returnTop';

// class Article{
//   title: string = "";
//   author: string = "";
//   content: string = "";
//   createdAt: string = "";
//   updatedAt: string = "";
//   userId: string = "";
//   classification: string = "";
// }

interface Article {
	id: number;
	title: string;
	author: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	userId: string;
	classification: string;
}

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
    <input id="title" name="title" required type="text" /><br/>

    <label htmlFor="content">content</label>
    <textarea id="content" name="content" required></textarea><br/>

		<label htmlFor="email">email</label>
    <input id="email" type="email" name="email" required /><br/>

		<label htmlFor="classification">classification</label>
		<select id="classification" name="classification" required>
			<option value="all">all</option>
			<option value="national">national</option>
			<option value="international">international</option>
			<option value="economics">economics</option>
			<option value="information">information</option>
			<option value="science">science</option>
			<option value="sports">sports</option>
		</select><br/>

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