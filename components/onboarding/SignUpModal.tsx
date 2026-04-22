"use client";
import {
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
} from "@heroui/react";
import useSignup from "@src/hooks/useSignup";
import PasswordField from "@src/ui/PasswordField";

export default function SignUpModal({ isOpen, onOpenChange }: SignUpModalProp) {
	const { formik, isLoading } = useSignup();

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			disableAnimation
			hideCloseButton
			size="2xl"
			placement="center"
		>
			<ModalContent>
				{() => (
					<>
						<ModalHeader className="flex flex-col gap-1">SignUp</ModalHeader>
						<ModalBody>
							<div>
								<div className="field-wrapper">
									<Input
										aria-label="fullName"
										label="Full Name"
										labelPlacement="outside-top"
										placeholder="fullName"
										type="text"
										classNames={{
											base: "input-field-base",
											inputWrapper:
												"input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
											input: "input-field !text-black",
										}}
										{...formik.getFieldProps("fullName")}
										isInvalid={
											!!formik.errors.fullName && formik.touched.fullName
										}
										errorMessage={
											formik.touched.fullName && formik.errors.fullName
										}
									/>
									<Input
										aria-label="mobile"
										label="Mobile Number"
										labelPlacement="outside-top"
										placeholder="mobile number"
										type="text"
										classNames={{
											base: "input-field-base",
											inputWrapper:
												"input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
											input: "input-field !text-black",
										}}
										// {...formik.getFieldProps("phone")}
										onChange={(e) => {
											const value = e.target.value.replace(/\D/g, "");
											if (value.length <= 10) {
												formik.setFieldValue("mobile", value);
											}
										}}
										id="mobile"
										name="mobile"
										value={formik.values.mobile}
										isInvalid={!!formik.errors.mobile && formik.touched.mobile}
										errorMessage={formik.touched.mobile && formik.errors.mobile}
									/>
								</div>
								<div className="field-wrapper">
									<Input
										aria-label="Email"
										label="Email"
										labelPlacement="outside-top"
										placeholder="Email"
										type="email"
										classNames={{
											base: "input-field-base",
											inputWrapper:
												"input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
											input: "input-field !text-black",
										}}
										{...formik.getFieldProps("email")}
										isInvalid={!!formik.errors.email && formik.touched.email}
										errorMessage={formik.touched.email && formik.errors.email}
									/>
								</div>
								<div className="field-wrapper">
									<PasswordField
										aria-label="Password"
										label="Create Password"
										labelPlacement="outside-top"
										placeholder="Password"
										classNames={{
											base: "input-field-base",
											inputWrapper:
												"input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
											input: "input-field !text-black",
										}}
										{...formik.getFieldProps("password")}
										isInvalid={
											!!formik.errors.password && formik.touched.password
										}
										errorMessage={
											formik.touched.password && formik.errors.password
										}
									/>
									<PasswordField
										aria-label="Confirm Password"
										label="Confirm Password"
										labelPlacement="outside-top"
										placeholder="Confirm Password"
										classNames={{
											base: "input-field-base",
											inputWrapper:
												"input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
											input: "input-field !text-black",
										}}
										{...formik.getFieldProps("confirmPassword")}
										isInvalid={
											!!formik.errors.confirmPassword &&
											formik.touched.confirmPassword
										}
										errorMessage={
											formik.touched.confirmPassword &&
											formik.errors.confirmPassword
										}
									/>
								</div>
								<button
									type="button"
									onClick={formik.submitForm}
									className="cursor-pointer cta-primary max-w-full! text-white text-[14px] w-full h-10.5 rounded-lg mt-2 disabled:bg-gray-500 disabled:text-white"
									disabled={isLoading}
								>
									Submit
								</button>
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

interface SignUpModalProp {
	isOpen: boolean;
	onOpenChange: () => void;
}
