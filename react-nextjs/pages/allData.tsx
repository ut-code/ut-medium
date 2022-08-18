// import styles from '../styles/Home.module.css'
import getData from '../components/getData';

export default function ListAllData() {
	const {data: posts} = getData<Post[]>('/v1/post');
	const {data: users} = getData<User[]>('/v1/user');
	const {data: sessions} = getData<Session[]>('/v1/session');
	const {data: profiles} = getData<Profile[]>('/v1/profile');


	return (
		<>
		{users?.map((user: User) => {
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

		{posts?.map((post: Post) => {
			return (
				<div key={post.id}>
					<p>{post.id}</p>
					<p>{post.title}</p>
					<p>{post.penName}</p>
					<p>{post.userId}</p>
					<p>{post.classification}</p>
					<p>{post.content}</p>
					<p>{post.createdAt}</p>
					<p>{post.updatedAt}</p>
				</div>
			)
		})}

		{sessions?.map((session: Session) => {
			return (
				<div key={session.userId}>
					<p>{session.id}</p>
					<p>{session.userId}</p>
				</div>
			)
		})}

		{profiles?.map((profile: Profile) => {
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
