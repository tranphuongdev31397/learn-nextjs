// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import { resolve } from 'path';
import Cookies from 'cookies';

type Data = {
	message: string;
};

export const config = {
	api: {
		bodyParser: false,
	},
};

const proxy = httpProxy.createProxyServer();

export default function login(req: NextApiRequest, res: NextApiResponse<Data>) {
	return new Promise((resolve) => {
		if (req.method !== 'POST') {
			res.status(500).json({ message: 'Method Not Support' });
		}

		//Không gửi token từ cookie lên server
		//Don't send cookie to server
		req.headers.cookie = '';
		const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body = '';
			proxyRes.on('data', function (chunk) {
				body += chunk;
			});
			proxyRes.on('end', function () {
				try {
					const { accessToken, expiredAt } = JSON.parse(body);

					//Convert to Cookies
					const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
					cookies.set('access_token', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: new Date(expiredAt),
					});

					//Res trong hàm này là một string
					//Ép kiểu dữ liệu về NextResponse để handle
					(res as NextApiResponse).status(200).json({ message: 'Login Success' });
				} catch (error) {
					(res as NextApiResponse).status(500).json({ message: 'Something went wrong' });
				}
			});
		};
		proxy.once('proxyRes', handleLoginResponse);

		proxy.web(req, res, {
			target: process.env.API_URL,
			changeOrigin: true, //Thay đổi localhost => targetHost // Change domain from localhost to target
			selfHandleResponse: true, // true  => dùng để handle các res trả về từ server , //if true => handle response from server
		});
	});
}
