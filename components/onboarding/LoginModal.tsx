"use client"
import {
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure
} from "@heroui/react";
import useLogin from "@src/hooks/useLogin";
import PasswordField from "@src/ui/PasswordField";
import ForgotPassModal from "./ForgotPassModal";

export default function LoginModal({ isOpen, onOpenChange }: LoginModalProp) {
    const { formik, isLoading } = useLogin();
    const { isOpen: isOpenF, onOpenChange: onOpenChangeF, onOpen: onOpenF } = useDisclosure();

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
                        <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
                        <ModalBody>
                            <div>
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
                                        label="Password"
                                        labelPlacement="outside-top"
                                        placeholder="Password"
                                        classNames={{
                                            base: "input-field-base",
                                            inputWrapper:
                                                "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                            input: "input-field !text-black",
                                        }}
                                        {...formik.getFieldProps("password")}
                                        isInvalid={!!formik.errors.password && formik.touched.password}
                                        errorMessage={formik.touched.password && formik.errors.password}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div></div>
                                    <button
                                        type="button"
                                        onClick={onOpenF}
                                        className="text-[14px] text-[#646464] cursor-pointer"
                                    >
                                        Lost your password
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={formik.submitForm}
                                    className="cursor-pointer cta-primary max-w-full! text-white text-[14px] w-full h-10.5 rounded-lg mt-2 disabled:bg-gray-500 disabled:text-white"
                                    disabled={isLoading}
                                >
                                    Submit
                                </button>

                                <ForgotPassModal isOpen={isOpenF} onOpenChange={onOpenChangeF} />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

interface LoginModalProp {
    isOpen: boolean;
    onOpenChange: () => void;
}