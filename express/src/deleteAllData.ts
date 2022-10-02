import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()

async function main() {

	await client.post.deleteMany()
	await client.account.deleteMany()
	await client.session.deleteMany()
	// await client.comment()
	await client.profile.deleteMany()
	await client.verificationToken.deleteMany()
	await client.user.deleteMany()

	// await client.comment.deleteMany()

	console.log("deleted all")
}

main()
  .then(async () => {
    await client.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await client.$disconnect()
    process.exit(1)
  })