import Cookies from 'cookies';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import { resolve } from 'path';

// type Data = {
// 	name: string;
// };

export const config = {
	api: {
		bodyParser: false,
	},
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method !== 'POST') {
		res.status(500).json({ message: 'Method Not Support' });
	}
	const cookies = new Cookies(req, res);
	cookies.set('access_token');

	res.status(200).json({ message: 'Logout success' });
}
