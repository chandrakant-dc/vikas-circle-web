import { addToast } from "@heroui/react";
import { forgotPassword, verifyOtp } from "@src/services/auth.service";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues: ForgotPasswordValueI = {
	email: "",
	otp: "",
};

export default function useForgotPassword() {
	const [isEmailSent, setIsEmailSent] = useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		initialValues,
		onSubmit: async (val) => {
			try {
				setIsLoading(true);
				if (isEmailSent) {
					if (val?.otp) {
						const resp = await verifyOtp({ email: val?.email, otp: val?.otp });
						addToast({
							title: resp?.data?.message || "otp verified",
							color: "success",
						});
						// const accesskey = resp.data?.token as string;
						// Cookies.set("wtu-id", accesskey);
						setTimeout(() => {
							window.location.reload();
						}, 2000);
					}
				} else {
					const resp = await forgotPassword({ email: val?.email });
					addToast({
						title: resp?.data?.message || "otp sent",
						color: "success",
					});
					setIsEmailSent(true);
				}
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
		isEmailSent,
	};
}

export interface ForgotPasswordValueI {
	email: string;
	otp?: string;
}
