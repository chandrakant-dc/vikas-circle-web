"use client"
import {
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@heroui/react";
import useForgotPassword from "@src/hooks/useForgotPassword";

export default function ForgotPassModal({ isOpen, onOpenChange }: ForgotPassModalProps) {
    const { formik, isEmailSent, isLoading } = useForgotPassword();
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
                        <ModalHeader className="flex flex-col gap-1">Forgot Password</ModalHeader>
                        <ModalBody>
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
                            {isEmailSent && (
                                <Input
                                    aria-label="otp"
                                    label="Verify Otp"
                                    labelPlacement="outside-top"
                                    placeholder="Enter OTP"
                                    type="text"
                                    classNames={{
                                        base: "input-field-base",
                                        inputWrapper:
                                            "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        input: "input-field !text-black",
                                    }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 6) {
                                            formik.setFieldValue("otp", value);
                                        }
                                    }}
                                    id="otp"
                                    name="otp"
                                    value={formik.values.otp}
                                    isInvalid={!!formik.errors.otp && formik.touched.otp}
                                    errorMessage={formik.touched.otp && formik.errors.otp}
                                />
                            )}
                            <button
                                type="button"
                                onClick={formik.submitForm}
                                className="cta-primary max-w-full! text-white text-[14px] w-full h-10.5 rounded-lg mt-2 cursor-pointer disabled:bg-gray-500 disabled:text-white"
                                disabled={isLoading}
                            >
                                Submit
                            </button>
                        </ModalBody>
                        <ModalFooter className="h-fit!">
                            <div className="flex justify-center gap-4 w-full h-fit">
                                <span className="text-[#646464] text-[14px]">Back to</span>
                                <button
                                    onClick={onClose}
                                    className="cursor-pointer text-[14px] text-(--primary-color)"
                                    type="button"
                                >
                                    Login
                                </button>
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

interface ForgotPassModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
}
