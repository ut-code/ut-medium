export { };

export type Classification = "all" | "national" | "international" | "economics" | "information" | "science" | "sports";


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

declare global{
	interface Session {
		id:     String
		userId: Int
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

