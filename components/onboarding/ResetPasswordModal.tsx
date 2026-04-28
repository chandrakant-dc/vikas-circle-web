"use client";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import useResetPassword from "@src/hooks/useResetPassword";
import PasswordField from "@src/ui/PasswordField";

export default function ResetPasswordModal({
	isOpen,
	onOpenChange,
}: ResetPasswordModalProp) {
	const { formik, isLoading } = useResetPassword();
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
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Reset Password
						</ModalHeader>
						<ModalBody>
							<div>
								<div className="field-wrapper">
									<PasswordField
										aria-label="Password"
										label="New Password"
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
								</div>
								<div className="field-wrapper">
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
									onClick={async () => {
										await formik.submitForm();
										onClose();
									}}
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

interface ResetPasswordModalProp {
	isOpen: boolean;
	onOpenChange: () => void;
}
