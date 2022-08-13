import { convertToRaw, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { default as React, useState } from "react";

class Article {
  id: number;
  title: string = "";
  author: string = "";
  content: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  userId: string = "";
};

export default function MyEditor() {
	const [author, setAuthor] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");


	const [editorState, setEditorState] = React.useState(
		() => EditorState.createEmpty()
		);

	const editor = React.useRef(null);
	const focusEditor = () => {
		editor.current.focus();
	}

	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(author, email, content);
		let formData = new FormData()
		formData.append("author", author);
		formData.append("email", email);
		formData.append("content", convertToRaw(editorState.getCurrentContent()).blocks[0].text);
		const response = await fetch("http://localhost:3000/v1/create/article", {
			method: "POST",
			body: formData
		});
		const result = await response.json();
		console.log(result);
	}

	return (
		<>

			<div
			style={{border: "1px solid white", minHeight: "6em", cursor: "text"}}
			onClick={focusEditor}
		>
			<Editor
				ref={editor}
				editorState={editorState}
				onChange={setEditorState}
				placeholder="write something..."
			/>
		</div>

		<div>

			<form onSubmit={handleSubmit}>
			<label>Title</label><br/>
			<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
			<label>Name</label><br/>
			<input type="text" value={author} name="author" onChange={(e)=>{setAuthor(e.target.value)}}/><br/>
			<label>email</label><br/>
			<input type="text" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} /><br/>
			<input type="submit" value="Submit"/>
			</form>
		</div>

		{/* <div>{editorState && (convertToRaw(editorState.getCurrentContent()).blocks[0].text)}</div> */}
		{/* show editorState as string */}
		</>
	)
}