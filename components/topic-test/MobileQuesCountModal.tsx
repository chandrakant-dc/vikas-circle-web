import { Modal, ModalBody, ModalContent } from "@heroui/react";
import type { QuestionState } from "@src/hooks/useTopicTest";
import CloseIcon from "@src/svg/CloseIcon";

export default function MobileQuesCountModal({
	isOpen,
	onClose,
	onOpenChange,
	topicName,
	questions,
	goToQuestion,
	onOpen,
}: SubmitConfirmModalProp) {
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
				body: "p-0",
			}}
			size="full"
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
							<div className="topic-test-count-container-mobile">
								<div className="topic-test-info-card">
									<div className="text-white text-[14px]">DevOps</div>
									<div className="text-white text-[12px]">{topicName}</div>
								</div>
								<div className="topic-test-question-count-container">
									<div className="flex items-center justify-between">
										<div>Questions</div>
										<div className="flex items-center justify-center text-[#4F29ED] border border-[#4F29ED] w-25 h-7.5 rounded-lg">
											{questions.length}
										</div>
									</div>
									<div className="count-container">
										{questions.map((item, i) => (
											<button
												type="button"
												key={`count-${i + 1}`}
												onClick={() => goToQuestion(i)}
												className={` 
                                            ${
																							item.selectedOption
																								? "bg-[#259800]"
																								: item.isMarkedForReview
																									? "bg-[#4f29ed]"
																									: "bg-[#54545480]"
																						}  w-9.25 h-9.25 rounded-full text-white flex items-center justify-center`}
											>
												{i + 1}
											</button>
										))}
									</div>
									<button
										type="button"
										onClick={onOpen}
										className="cta-primary min-w-50 max-w-full!"
									>
										Submit Test
									</button>
								</div>
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
	onOpen: () => void;
	topicName: string;
	questions: QuestionState[];
	goToQuestion: (index: number) => void;
}
