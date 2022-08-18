// import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const client = new PrismaClient();

// https://www.npmjs.com/package/next-auth

export default NextAuth({
  secret: process.env.JWT_SECRET,
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
	// adapter: PrismaAdapter(client), 今後の課題
	// callbacks: {
	// 	async session(session, user) => {
	// 		session.accessToken = user.accessToken;
	// 		session.expires = user.expires;
	// 		return session;
	// 	}
	// }
})

// export default NextAuth({
// 	providers: [
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_CLIENT_ID || "",
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
// 		}),
// 	],
// 	secret: process.env.JWT_SECRET
// });

