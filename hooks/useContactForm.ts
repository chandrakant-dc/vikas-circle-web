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
		onSubmit: () => {},
	});

	return {
		formik,
	};
}
