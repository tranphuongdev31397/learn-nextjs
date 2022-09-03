// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';
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
	return new Promise((resolve) => {
		//Chuyển đổi accessTOken trong cookie về dạng Author
		//Convert cookies to Header Authorization
		const cookies = new Cookies(req, res);
		const accessToken = cookies.get('access_token');
		if (accessToken) {
			req.headers.authorization = `Bearer ${accessToken}`;
		}

		//Không gửi token từ cookie lên server
		//Don't send cookie to server
		req.headers.cookie = '';

		proxy.web(req, res, {
			target: process.env.API_URL,
			changeOrigin: true, //Thay đổi localhost => targetHost // Change domain from localhost to target
			selfHandleResponse: false, // true  => dùng để handle các res trả về từ server , //if true => handle response from server
		});

		proxy.once('proxyRes', () => {
			resolve(true);
		});
	});
}
