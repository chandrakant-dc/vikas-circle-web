import { addToast } from "@heroui/react";
import type { AxiosResponse } from "axios";
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
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	(config) => {
		// const token = Cookies.get("buuid");
		// if (token) {
		// 	config.headers.Authorization = `Bearer ${token}`;
		// }
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// axiosInstance.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	},
// );

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: ErrResp) => {
		if (!error.response) {
			console.error("Network error:", error);
			addToast({
				title: "Something went wrong",
				color: "danger",
			});
			return Promise.reject(
				new Error("Network error. Please try again later."),
			);
		}

		const { status, data } = error.response;

		switch (status) {
			case 400:
				console.warn("Validation error:", data?.message);
				addToast({
					title: data?.message || "Validation error",
					color: "danger",
				});
				// toast.error(data?.message || "Validation error")
				break;
			case 401:
				console.warn("Unauthorized. Token might be expired.");
				Cookies.remove("wtu-id");
				// Optionally redirect to login page
				// window.location.href = "/login";
				break;
			case 403:
				console.error("Forbidden. No access.");
				addToast({
					title: data?.message || "Forbidden. No access.",
					color: "danger",
				});
				// toast.error(data?.message || "Forbidden. No access.")
				break;
			case 404:
				console.error("Resource not found:", data?.message);
				addToast({
					title: data?.message || "Resource not found",
					color: "danger",
				});
				// toast.error(data?.message || "Resource not found")
				break;
			case 500:
				console.error("Server error:", data?.message);
				addToast({
					title: data?.message || "Server error",
					color: "danger",
				});
				// toast.error(data?.message || "Server error")
				break;
			default:
				console.error("Unknown error:", data?.message || error);
				addToast({
					title: data?.message || "Unknown error",
					color: "danger",
				});
			// toast.error(data?.message || "Unknown error")
		}

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
