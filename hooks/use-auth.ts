import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authAPI } from '../api-client';

const MS_IN_HOUR = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
	//GET PROFILE
	const {
		data: profile,
		mutate,
		error,
	} = useSWR('/profile', {
		dedupingInterval: MS_IN_HOUR, //1hr
		revalidateOnFocus: false,
		...options,
	});

	//Login

	async function login() {
		await authAPI.login({
			username: 'phuongtm1',
			password: '123456',
		});
		await mutate();
	}
	async function logout() {
		await authAPI.logout();

		mutate({}, false);
	}

	return {
		profile,
		login,
		logout,
	};
}
