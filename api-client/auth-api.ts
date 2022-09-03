import { LoginPayload } from './../models/auth';
import axiosClient from './api-config';

export const authAPI = {
	login(payload: LoginPayload) {
		return axiosClient.post('/login', payload);
	},
	logout() {
		return axiosClient.post('/logout');
	},
	getProfile() {
		return axiosClient.get('/profile');
	},
};
