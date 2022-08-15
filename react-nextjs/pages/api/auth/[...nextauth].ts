import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
// https://www.npmjs.com/package/next-auth

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Sign in with passwordless email link
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "<no-reply@example.com>",
    // }),
  ],
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

