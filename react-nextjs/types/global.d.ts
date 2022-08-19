export { };

export type Classification = "all" | "national" | "international" | "economics" | "information" | "science" | "sports";


declare global{
		interface User {
		id:        Int;
		name:      String?;
		email:     String?;
		emailVerified:  DateTime?;
		Image:	String?;
		accounts: Account[];
		sessions: Session[];
		posts:    Post[];
	}
}

declare global{
	interface Post {
	id: number;
	title: string;
	penName: string;
	userId: Int
	classification: String;
	content: string;
	createdAt: string;
	updatedAt: string;
	}
}

declare global {
	interface CreatePost {
	id: number;
	title: string;
	penName: string;
	userId: Int
	classification: String;
	content: string;
	createdAt: string;
	updatedAt: string;
	email: string;
	name: string
	}
}

declare global{
	interface Session {
		id:     String
		sessionToken: String
		userId: Int
		expires: DateTime
		user: User
	}
}


enum Role {
  USER,
  ADMIN
}

declare global{
	interface Profile {
		id:        Int
		content:   String
		createdAt: DateTime
		updatedAt: DateTime
		user:      User
		userId:    Int
	}
}

declare global{
	interface SignUp {
		email: String
		name: String
	}
}

