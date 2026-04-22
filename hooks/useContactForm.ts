import { addToast } from "@heroui/react";
import contactSchema from "@src/schema/contact.schema";
import { useFormik } from "formik";

const initialValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

export default function useContactForm() {
	const formik = useFormik({
		initialValues,
		validationSchema: contactSchema,
		onSubmit: () => {
			addToast({
				title: "Form submitted successfully!",
				color: "success",
			});
			formik.resetForm();
		},
	});

	return {
		formik,
	};
}
