// import styles from '../styles/Home.module.css'
import getData from '../components/getData';

export default function ListAllData() {
	const {data: post} = getData<Post[]>('/v1/post');
	const {data: user} = getData<User[]>('/v1/user');
	const {data: usersOnPost} = getData<UsersOnPosts[]>('/v1/usersOnPost');
	const {data: session} = getData<Session[]>('/v1/session');
	const {data: profile} = getData<Profile[]>('/v1/profile');


	return (
		<>
		{user?.map((user: User) => {
			return (
				<div key={user.id}>
					<p>{user.id}</p>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>{user.createdAt}</p>
					<p>{user.updatedAt}</p>
					<p>{user.role}</p>
				</div>
			)
		})}

		{post?.map((post: Post) => {
			return (
				<div key={post.id}>
					<p>{post.id}</p>
					<p>{post.title}</p>
					<p>{post.author}</p>
					<p>{post.content}</p>
					<p>{post.createdAt}</p>
					<p>{post.updatedAt}</p>
					<p>{post.classification}</p>
					{/* <p>{post.users}</p> */}
				</div>
			)
		})}

		{/* {usersOnPost?.map((usersOnPost) => {
			return (
				<div key={[usersOnPost.userId, usersOnPost.postId].toString()}>
					<p>{usersOnPost.userId}</p>
					<p>{usersOnPost.postId}</p>
					<p>{usersOnPost.assignedAt}</p>
					<p>{usersOnPost.assignedBy}</p>
				</div>
			)
		})} */}

		{session?.map((session: Session) => {
			return (
				<div key={session.userId}>
					<p>{session.id}</p>
					<p>{session.userId}</p>
				</div>
			)
		})}

		{profile?.map((profile: Profile) => {
			return (
				<div key={profile.id}>
					<p>{profile.id}</p>
					<p>{profile.content}</p>
					<p>{profile.createdAt}</p>
					<p>{profile.updatedAt}</p>
					<p>{profile.userId}</p>
				</div>
			)
		})}
		</>
	)
}
