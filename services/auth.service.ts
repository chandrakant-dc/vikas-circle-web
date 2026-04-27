import axiosInstance from "@src/config/axios-instance";

export const userSignup = async (data: SignUpPayload) => {
	return axiosInstance.post(`/api/v1/user`, data);
};

export const userLogin = async (data: LoginPayload) => {
	return axiosInstance.post(`/api/v1/user/login`, data);
};

export const verifyOtp = async (data: VerifyOtpPayload) => {
	return axiosInstance.post(`/api/v1/user/verify-otp`, data);
};

export const forgotPassword = async (data: { email: string }) => {
	return axiosInstance.post(`/api/v1/user/forgot-password`, data);
};

export const sessionTracking = async (data: {
	timeSpent: number;
	guestId: string | undefined;
}) => {
	return axiosInstance.post(`/api/session/track`, data);
};

export const getUserTimeSpent = async () => {
	return axiosInstance.get(`/api/session/track`);
};

export const getLoggedInUser = async () => {
	return axiosInstance.get(`/api/v1/user/details`);
};

export const userLogout = async () => {
	return axiosInstance.post(`api/v1/user/logout`);
};

export interface LoginPayload {
	email: string;
	password: string;
}

export interface SignUpPayload {
	fullName: string;
	mobile: string;
	email: string;
	password: string;
}

export interface VerifyOtpPayload {
	email: string;
	otp: string;
}
