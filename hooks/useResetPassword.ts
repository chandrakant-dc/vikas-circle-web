import { addToast } from "@heroui/react";
import { resetPasswordSchema } from "@src/schema/auth.schema";
import { resetPassword } from "@src/services/auth.service";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues: ResetInitialI = {
	password: "",
	confirmPassword: "",
};

export default function useResetPassword() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const formik = useFormik({
		initialValues,
		validationSchema: resetPasswordSchema,
		onSubmit: async (val) => {
			try {
				setIsLoading(true);
				const resp = await resetPassword({ newPassword: val?.password });
				addToast({
					title: resp?.data?.message || "Password reset successful",
					color: "success",
				});
				setIsLoading(false);
				formik.resetForm();
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

interface ResetInitialI {
	password: string;
	confirmPassword: string;
}
