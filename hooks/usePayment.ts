import { addToast } from "@heroui/react";
import { formatFileSize } from "@src/helper/global.helper";
import { buyPlan } from "@src/services/plan.service";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function usePayment() {
	const [fileDetails, setFileDetails] = useState<FileDetailI | null>(null);
	const navigate = useRouter();

	const handleUpdateFileDetails = (name: string, size: number) => {
		const fileSize = formatFileSize(size);
		setFileDetails({
			name,
			size: fileSize,
		});
	};

	const formik = useFormik({
		initialValues: {
			file: null,
			planId: "",
		},
		onSubmit: async () => {
			const formData = new FormData();
			if (formik.values.file)
				formData.append("receipt", formik.values.file as File);
			formData.append("planId", formik.values.planId);
			const resp = await buyPlan(formData);
			addToast({
				title: "Payment",
				description:
					resp?.data?.message ||
					"submitted successfully, our team will verify your payment & activate your plan within 24 hours.",
				color: "success",
			});
			formik.resetForm();
			setTimeout(() => {
				navigate.push("/my-learning");
			}, 3000);
		},
	});

	return {
		fileDetails,
		handleUpdateFileDetails,
		formik,
	};
}

interface FileDetailI {
	name: string;
	size: string;
}
