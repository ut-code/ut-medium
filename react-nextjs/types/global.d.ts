export { };

export type Classification = "all" | "national" | "international" | "economics" | "information" | "science" | "sports";

declare global{
	interface Post {
	id: number;
	title: string;
	author: string;
	// content: string;
	prosContent: string;
	oppContent: string;
	createdAt: string;
	updatedAt: string;
	userId: string;
	classification: Classification;
	}
}

declare global{
		interface User {
		id:        Int;
		name:      String;
		email:     String;
		password:  String;
		createdAt: DateTime;
		updatedAt: DateTime;
		posts:     UsersOnPosts[];
		profile:   Profile;
		role:      Role;
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
	interface Post {
		id:             Int
		title:          String
		author:         String
		content:    String
		createdAt:      DateTime
		updatedAt:      DateTime
		classification: Classification
		users: UsersOnPosts[]
	}
}

declare global{
	interface UsersOnPosts {
  user:       User
  userId:     Int
  post:       Post
  postId:     Int
  assignedAt: DateTime
  assignedBy: String
	}
}

declare global{
	interface Session {
		id:     String
		userId: Int
	}
}