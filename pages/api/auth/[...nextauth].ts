import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, {
		providers: [
			GitHubProvider({
				clientId: process.env.GITHUB_ID,
				clientSecret: process.env.GITHUB_SECRET,
			}),
		],
		secret: process.env.SECRET,
	});

export default authHandler;