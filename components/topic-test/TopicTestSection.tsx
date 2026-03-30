"use client";
import { useDisclosure } from "@heroui/react";
import { TopicTestContext } from "@src/context/topic-test/TopicTestContext";
import { useTopicTest } from "@src/hooks/useTopicTest";
import { useContext } from "react";
import SubmitConfirmModal from "./SubmitConfirmModal";

export default function TopicTestSection() {
	const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();
	const { topicQuesList, topicDetails } = useContext(TopicTestContext);
	const {
		currentQuestion,
		currentIndex,
		selectOption,
		handleSaveNext,
		handlePrevious,
		handleMarkForLater,
		counts,
		questions,
		goToQuestion,
	} = useTopicTest(topicQuesList);
	return (
		<div>
			<div className="section-container">
				<div className="topic-test-container">
					<div className="topic-test-ques-container">
						<div className="text-[12px] text-[#4F29ED] font-semibold">
							{topicDetails?.topicName}
						</div>
						<div className="text-[#202020] text-[20px] font-semibold">
							Question No.: {currentIndex + 1}
						</div>

						<div className="text-[#202020] text-[20px] font-semibold">
							{currentQuestion?.question}
						</div>
						<div className="flex flex-col gap-4 mt-8">
							{["option1", "option2", "option3", "option4"].map((opt, i) => {
								const value =
									currentQuestion?.[opt as keyof typeof currentQuestion];

								return (
									<div key={opt} className="flex items-center justify-between">
										<div className="flex items-center gap-4">
											<div className="border border-[#54545480] bg-[#5454541A] w-12 h-12 rounded-full flex items-center justify-center font-bold">
												{String.fromCharCode(65 + i)}
											</div>
											<div>{value}</div>
										</div>

										<button
											type="button"
											onClick={() => selectOption(opt)}
											className={`w-12 h-12 rounded-full border cursor-pointer ${
												currentQuestion?.tempSelectedOption === opt
													? "bg-[#2598001A] border-[#259800]"
													: "bg-white border-[#54545480]"
											}`}
										/>
									</div>
								);
							})}
						</div>
						<div className="w-full flex items-center justify-between my-4">
							<button
								type="button"
								onClick={handleMarkForLater}
								className="cta-default min-w-50 border border-[#4F29ED] text-[#4F29ED]! "
							>
								Mark for later
							</button>
							<div className="flex items-center gap-4">
								<button
									type="button"
									onClick={handlePrevious}
									className="cta-default min-w-50"
								>
									Previous
								</button>
								<button
									type="button"
									onClick={handleSaveNext}
									className="cta-primary min-w-50"
								>
									Save & Next
								</button>
							</div>
						</div>
						<div className="flex w-full items-center justify-center gap-4">
							<div className="flex items-center gap-4">
								<div className="bg-[#259800] w-9.25 h-9.25 rounded-full text-white flex items-center justify-center">
									{counts.attempted}
								</div>
								<div className="">Attempted</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-[#4F29ED] w-9.25 h-9.25 rounded-full text-white flex items-center justify-center">
									{counts.marked}
								</div>
								<div className="">Marked of later</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-[#54545480] w-9.25 h-9.25 rounded-full text-white flex items-center justify-center">
									{counts.notAttempted}
								</div>
								<div className="">Not attempted</div>
							</div>
						</div>
					</div>
					<div className="topic-test-count-container">
						<div className="topic-test-info-card">
							<div className="text-white text-[14px]">DevOps</div>
							<div className="text-white text-[12px]">
								{topicDetails?.topicName}
							</div>
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
				</div>
			</div>

			<SubmitConfirmModal
				isOpen={isOpen}
				onClose={onClose}
				onOpenChange={onOpenChange}
			/>
		</div>
	);
}
