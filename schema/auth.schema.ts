import * as Yup from "yup";

export const registerSchema = Yup.object({
	fullName: Yup.string()
		.trim()
		.min(3, "Full name must be at least 3 characters")
		.required("Full name is required"),

	mobile: Yup.string()
		.matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
		.required("Mobile number is required"),

	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),

	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),

	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirm password is required"),
});

export const loginSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),

	password: Yup.string().required("Password is required"),
});

export const resetPasswordSchema = Yup.object({
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),

	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirm password is required"),
});
