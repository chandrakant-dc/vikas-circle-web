import { addToast } from "@heroui/react";
import { type SignUpPayload, userSignup } from "@src/services/auth.service";
// import { type SignupPayload, signup } from "@src/services/auth.service";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues: SignupValueI = {
	fullName: "",
	mobile: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export default function useSignup() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		initialValues,
		onSubmit: async (val) => {
			try {
				setIsLoading(true);
				const data: SignUpPayload = {
					fullName: val?.fullName,
					mobile: val?.mobile,
					email: val?.email,
					password: val?.password
				};
				await userSignup(data);
				addToast({
					title: "user registered successfully!",
					color: "success",
				});
				localStorage.removeItem("guestId");
				// const accesskey = resp.data?.token as string;
				// Cookies.set("wtu-id", accesskey);
				setTimeout(() => {
					window.location.reload();
				}, 2000);
				setIsLoading(false);
			} catch (error) {
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

export interface SignupValueI {
	fullName: string;
	mobile: string;
	email: string;
	password: string;
	confirmPassword: string;
}
