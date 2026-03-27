import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
	baseURL: baseUrl,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"ngrok-skip-browser-warning": "true",
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = Cookies.get("buuid");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default axiosInstance;

type errObject = { [key: string]: string };

export interface ErrResp {
	response: {
		data: {
			data: { [key: string]: errObject };
			message: string;
			success: boolean;
		};
		status: number;
	};
}
