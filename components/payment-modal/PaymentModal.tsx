"use client";
import { Modal, ModalBody, ModalContent } from "@heroui/react";
import usePayment from "@src/hooks/usePayment";
import PaymentCancelIcon from "@src/svg/PaymentCancelIcon";
import PaymentFileIcon from "@src/svg/PaymentFileIcon";
import PaymentModalCloseIcon from "@src/svg/PaymentModalCloseIcon";
import UploadIcon from "@src/svg/UploadIcon";
import { FileUploader } from "react-drag-drop-files";
import "./payment-modal.css";
const fileTypes = ["JPG", "PNG", "PDF"];

export default function PaymentModal({
	isOpen,
	onOpenChange,
	onClose,
	currentPlanInfo,
}: PaymentModalProp) {
	const { handleUpdateFileDetails, fileDetails, formik } = usePayment();

	const handleCloseModal = () => {
		formik.resetForm();
		onClose();
	};
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			disableAnimation
			hideCloseButton
			size="xl"
			placement="center"
			classNames={{
				body: "p-0",
			}}
			onClose={handleCloseModal}
		>
			<ModalContent>
				{() => (
					<>
						<ModalBody>
							<div className="payment-modal-head">
								<div className="payment-modal-head-content">
									<div className="payment-modal-title">Complete Payment</div>
									<div className="payment-modal-plan-info">
										{currentPlanInfo?.name} Plan: ₹{currentPlanInfo?.price}
									</div>
								</div>
								<button type="button" onClick={handleCloseModal}>
									<PaymentModalCloseIcon />
								</button>
							</div>
							<div className="payment-modal-qr-container">
								<div className="payment-modal-qr-title">
									Scan and Pay through any UPI
								</div>
								<div className="payment-modal-qr">
									<img src="/qr.png" alt="QR" />
								</div>
								<div className="payment-modal-upload-container">
									<div className="payment-modal-upload-title">
										Upload receipt
									</div>

									{formik.values.file !== null ? (
										<div className="payment-modal-uploaded-wrapper">
											<div className="payment-modal-uploaded-content">
												<PaymentFileIcon />
												<div>
													<div className="payment-modal-uploaded-file">
														{fileDetails?.name}
													</div>
													<div className="payment-modal-uploaded-file-info">
														{fileDetails?.size} | Uploaded
													</div>
												</div>
											</div>
											<button type="button" onClick={() => formik.resetForm()}>
												<PaymentCancelIcon />
											</button>
										</div>
									) : (
										<FileUploader
											handleChange={(event) => {
												const file = event as File;
												handleUpdateFileDetails(file?.name, file?.size);
												// const files = event ? Array.from(event []) : [];
												formik.setFieldValue("file", file);
												formik.setFieldValue(
													"planId",
													currentPlanInfo?.planId || "NA",
												);
											}}
											name="file"
											types={fileTypes}
											onTypeError={(e: string) => {
												console.log(e);
											}}
											classes="disabled:opacity-50"
										>
											<div className="payment-modal-upload-section">
												<div className="payment-modal-upload-label">
													<UploadIcon /> Upload
												</div>
												<div className="payment-modal-upload-info">
													Choose a file or drag and drop here
												</div>
											</div>
										</FileUploader>
									)}
								</div>
								<button
									type="button"
									onClick={formik.submitForm}
									className="cta-primary max-w-full! my-4"
								>
									Submit
								</button>
								<div className="payment-modal-upload-note">
									Our team will verify your payment & activate your plan within
									24 hours.
								</div>
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

interface PaymentModalProp {
	isOpen: boolean;
	onOpenChange: () => void;
	onClose: () => void;
	currentPlanInfo: {
		name: string;
		price: number;
		planId: string;
	};
}
