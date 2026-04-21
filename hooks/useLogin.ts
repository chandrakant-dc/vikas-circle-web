import { addToast } from "@heroui/react";
import type { ErrResp } from "@src/config/axios-instance";
import { userLogin } from "@src/services/auth.service";
// import { login } from "@src/services/auth.service";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues: LoginValueI = {
	email: "",
	password: "",
};

export default function useLogin() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		initialValues,
		onSubmit: async (val) => {
			try {
				setIsLoading(true);
				const resp = await userLogin(val);
				addToast({
					title: resp?.data?.message || "login successfully",
					color: "success",
				});
				// const accesskey = resp.data?.token as string;
				// Cookies.set("wtu-id", accesskey);
				localStorage.removeItem("guestId");
				setTimeout(() => {
					window.location.reload();
				}, 2000);
				setIsLoading(false);
			} catch (error) {
				const err = error as ErrResp;
				addToast({
					title: err?.response?.data?.message || "something went wrong",
					color: "danger",
				});
				setIsLoading(false);
				throw error;
			}
		},
	});

	return {
		formik,
		isLoading,
	};
}

export interface LoginValueI {
	email: string;
	password: string;
}
