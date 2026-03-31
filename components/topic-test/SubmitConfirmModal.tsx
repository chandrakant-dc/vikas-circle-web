import { Modal, ModalBody, ModalContent } from "@heroui/react";
import { TopicTestContext } from "@src/context/topic-test/TopicTestContext";
import CloseIcon from "@src/svg/CloseIcon";
import { useContext } from "react";

export default function SubmitConfirmModal({
	isOpen,
	onClose,
	onOpenChange,
	getSubmitPayload,
	openResultModal,
}: SubmitConfirmModalProp) {
	const { handleSubmitQuiz } = useContext(TopicTestContext);
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			isDismissable={false}
			isKeyboardDismissDisabled={true}
			disableAnimation={true}
			hideCloseButton={true}
			placement="center"
			classNames={{
				backdrop: "bg-[#EAEAEF66]",
				base: "max-w-[689px] p-4",
			}}
		>
			<ModalContent>
				{() => (
					<>
						<ModalBody>
							<div className="flex justify-end">
								<button type="button" onClick={onClose}>
									<CloseIcon />
								</button>
							</div>
							<h2 className="text-center text-[#211C37] lg:text-[24px] font-semibold">
								Are you sure you want to submit?
							</h2>
							<div className=" flex justify-center gap-x-4 mt-8">
								<button
									type="button"
									onClick={async () => {
										const data = getSubmitPayload();
										await handleSubmitQuiz(data);
										openResultModal();
										onClose();
									}}
									className="cta-primary font-semibold text-[16px] text-white h-13.5 bg-primary rounded-2xl w-full"
								>
									Submit
								</button>
								<button
									type="button"
									onClick={onClose}
									className="cta-default font-semibold text-[16px] text-primary h-13.5 bg-white border border-[#4F29ED] rounded-2xl w-full"
								>
									Cancel
								</button>
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

interface SubmitConfirmModalProp {
	isOpen: boolean;
	onOpenChange: () => void;
	onClose: () => void;
	getSubmitPayload: () => {
		questionId: string;
		selectedOption: string | null;
	}[];
	openResultModal: () => void;
}
