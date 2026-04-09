"use client";
import { useDisclosure } from "@heroui/react";
import { TopicTestContext } from "@src/context/topic-test/TopicTestContext";
import { useTopicTest } from "@src/hooks/useTopicTest";
import GreenTickIcon from "@src/svg/GreenTickIcon";
import InfoIcon from "@src/svg/InfoIcon";
import { useContext } from "react";
import MobileQuesCountModal from "./MobileQuesCountModal";
import ResultModal from "./ResultModal";
import SubmitConfirmModal from "./SubmitConfirmModal";

export default function TopicTestSection() {
	const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();
	const {
		isOpen: isOpenM,
		onClose: onCloseM,
		onOpenChange: onOpenChangeM,
		onOpen: onOpenM,
	} = useDisclosure();
	const {
		isOpen: isOpenR,
		onOpenChange: onOpenChangeR,
		onOpen: onOpenR,
	} = useDisclosure();
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
		getSubmitPayload,
	} = useTopicTest(topicQuesList);
	return (
		<>
			<div className="section-container">
				<div className="topic-test-container">
					<div className="topic-test-ques-container">
						<div className="topic-ques-count-mobile-container">
							<div className="h-[114px] bg-[#f7f4ff] p-4 flex flex-col justify-around overflow-hidden rounded-2xl">
								<div className="flex items-center justify-between ques-list-box-mob-title">
									<div className="text-[18px] font-bold text-[#202020]">
										<span className="text-[#5526ee]">
											{questions.length || "-"}
										</span>{" "}
										Questions
									</div>
									<div className="text-[12px] text-[#727272] flex items-center gap-x-2">
										<InfoIcon />
										<button
											type="button"
											onClick={onOpenM}
											className="text-[#5526ee] underline"
										>
											{" "}
											Click here{" "}
										</button>{" "}
										for more info
									</div>
								</div>
								<div className="flex gap-x-4 w-fit">
									{questions.length > 0 &&
										questions.slice(0, 6).map((item, i) => (
											<button
												type="button"
												key={`question-${i + 1}`}
												onClick={() => goToQuestion(i)}
												className={`question-count w-[37px] h-[37px] rounded-full flex justify-center items-center text-white text-[14px]  ${item.selectedOption
													? "bg-[#259800]"
													: item.isMarkedForReview
														? "bg-[#4f29ed]"
														: "bg-[#54545480]"
													} `}
											>
												{i + 1}
											</button>
										))}
								</div>
							</div>
						</div>
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
											<div>{value || "--"}</div>
										</div>

										<button
											type="button"
											onClick={() => selectOption(opt)}
											className={`w-12 h-12 rounded-full border cursor-pointer ${currentQuestion?.tempSelectedOption === opt
												? "bg-[#2598001A] border-[#259800] flex items-center justify-center"
												: "bg-white border-[#54545480]"
												}`}
										>
											{currentQuestion?.tempSelectedOption === opt ? (
												<GreenTickIcon />
											) : null}
										</button>
									</div>
								);
							})}
						</div>
						<div className="w-full flex sm:flex-row flex-col gap-4 items-center justify-between my-4">
							<button
								type="button"
								onClick={() => {
									if (!currentQuestion?.selectedOption) {
										handleMarkForLater();
									}
								}}
								disabled={!!currentQuestion?.selectedOption}
								className="cta-default disabled:bg-gray-500! disabled:text-white! disabled:border-gray-500! min-w-40 sm:max-w-62.5! max-w-full! border border-[#4F29ED] text-[#4F29ED]! "
							>
								Mark for later
							</button>
							<div className="flex sm:flex-row flex-col items-center gap-4 w-full">
								<button
									type="button"
									onClick={handlePrevious}
									className="cta-default min-w-40 sm:max-w-62.5! max-w-full!"
								>
									Previous
								</button>
								<button
									type="button"
									onClick={() => {
										if (currentQuestion?.tempSelectedOption) {
											handleSaveNext();
										}
									}}
									disabled={!currentQuestion?.tempSelectedOption}
									className="cta-primary min-w-40 sm:max-w-62.5! max-w-full! disabled:bg-gray-500! disabled:text-white! disabled:border-gray-500! disabled:!bg-none"
								>
									Save & Next
								</button>
							</div>
						</div>
						<div className="flex w-full sm:flex-row flex-col sm:items-center items-start justify-center gap-4">
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
						<button
							type="button"
							onClick={onOpen}
							className="cta-primary min-w-50 mx-auto mt-4 lg:hidden!"
						>
							Submit Test
						</button>
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
                                            ${item.selectedOption
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
				getSubmitPayload={getSubmitPayload}
				openResultModal={onOpenR}
			/>
			<MobileQuesCountModal
				isOpen={isOpenM}
				onClose={onCloseM}
				onOpenChange={onOpenChangeM}
				topicName={topicDetails?.topicName || "--"}
				questions={questions}
				goToQuestion={goToQuestion}
				onOpen={onOpen}
			/>
			<ResultModal isOpen={isOpenR} onOpenChange={onOpenChangeR} />
		</>
	);
}
