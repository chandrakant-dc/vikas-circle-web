import { object, string } from "yup";

export default object({
	name: string().required(),
	email: string().email().required(),
	subject: string().required(),
	message: string().required(),
});
