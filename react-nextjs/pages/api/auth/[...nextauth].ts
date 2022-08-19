import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

// https://www.npmjs.com/package/next-auth

export default NextAuth({
  secret: process.env.JWT_SECRET,
	// adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
  ],
	// callbacks: {
	// 	async jwt({token, account}) {
	// 		if (account?.accessToken) {
	// 			token.accessToken = account.accessToken
	// 		}
	// 		return token
	// 	},
	// 	async session({session, token, user}) {
	// 		return session.
	// 	},
	// 	}
	}
)
	// adapter: PrismaAdapter(client), 今後の課題
	// callbacks: {
	// 	async session(session, user) => {
	// 		session.accessToken = user.accessToken;
	// 		session.expires = user.expires;
	// 		return session;
	// 	}
	// }


// export default NextAuth({
// 	providers: [
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_CLIENT_ID || "",
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
// 		}),
// 	],
// 	secret: process.env.JWT_SECRET
// });

