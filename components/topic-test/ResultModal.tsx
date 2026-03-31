import { Modal, ModalBody, ModalContent } from "@heroui/react";
import { TopicTestContext } from "@src/context/topic-test/TopicTestContext";
import { formatNumber } from "@src/helper/global.helper";
import CloseMenuIcon from "@src/svg/CloseMenuIcon";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import "./result-modal.css";

export default function ResultModal({ isOpen, onOpenChange }: ResultModalProp) {
	const { topicQuizResult } = useContext(TopicTestContext);
	const navigate = useRouter();
	const handleRedirect = () => {
		navigate.push("/");
	};
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			isDismissable={false}
			isKeyboardDismissDisabled={true}
			disableAnimation={true}
			hideCloseButton={true}
			classNames={{
				backdrop: "bg-[#EAEAEF66]",
				base: "",
				body: "p-0",
			}}
			size="full"
		>
			<ModalContent>
				{() => (
					<>
						<ModalBody>
							{/* Head */}
							<div
								className="flex items-center justify-between mt-8 mx-12"
								style={{ zIndex: 2 }}
							>
								<div className="flex items-center gap-x-4">
									<img src="/logo.png" alt="logo" className="h-[40px]" />
								</div>
								<button
									type="button"
									className="close-modal-btn--screen--one"
									onClick={handleRedirect}
								>
									<CloseMenuIcon />
								</button>
							</div>
							{/* Body */}
							<div className="connectivity-body result-score-card h-[417px] bg-[#f7f4ff] mb-12 mt-20 flex justify-between items-center md:pl-12 ">
								<div className="md:w-[741px] p-8 result-score-detail-box">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-x-4">
											{/* <div className="icon-box">
                                                <ScoredIcon />
                                            </div> */}
											<div className="text-[#32324D] text-[24px] font-bold score-title">
												You’ve scored
											</div>
										</div>
										<div className="text-[#4F29ED] font-bold text-[30px] bg-[#f7f4ff] border border-primary rounded-[12px] w-[142px] text-center score-val score--percentage">
											{topicQuizResult?.scorePercent} %
										</div>
									</div>
									<div className="h-[1px] bg-[#D5D7D9] w-full my-8 result-score-divider"></div>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-x-4">
											{/* <div className="icon-box">
                                                <CorrectAnswerIcon />
                                            </div> */}
											<div className="text-[#32324D] text-[24px] font-bold score-title">
												Correct Answers
											</div>
										</div>
										<div className="text-[#259800] text-[30px] font-bold score-val">
											{topicQuizResult?.correct}
										</div>
									</div>
									<div className="h-[1px] bg-[#D5D7D9] w-full my-8 result-score-divider"></div>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-x-4">
											{/* <div className="icon-box">
                                                <IncorrectAnswerIcon />
                                            </div> */}
											<div className="text-[#32324D] text-[24px] font-bold score-title">
												Incorrect Answers
											</div>
										</div>
										<div className="text-[#E31D1C] text-[30px] font-bold score-val">
											{topicQuizResult?.wrong}
										</div>
									</div>
								</div>
								{/* <img src="/dashboard/result-modal.svg" alt="image" className="result-score-card-img" /> */}
							</div>
							{/* Bottom */}
							{/* <div className="w-full flex justify-center items-center">
                                <button type="button" onClick={handleRedirectToTopicDetails} className="disabled:bg-gray-500 disabled:cursor-not-allowed bg-primary text-white py-[16px] px-[24px] text-[16px] w-[250px] h-[54px] rounded-[16px]">Keep Leaning</button>
                            </div> */}
							<div className="w-full px-4 score-breakdown">
								<div className="font-medium text-[#727272] md:text-[18px] text-[14px]">
									Scores Calculation:
								</div>
								<div className="font-medium text-[#727272] md:text-[18px] text-[14px]">
									Your correct answers{" "}
									<span className="text-[#259800]">
										{topicQuizResult?.correct}
									</span>
									, so you’ve got {topicQuizResult?.maxMarkPerQuestion} x{" "}
									{topicQuizResult?.correct} ={" "}
									{topicQuizResult !== null
										? formatNumber(
												topicQuizResult?.maxMarkPerQuestion *
													topicQuizResult?.correct,
											)
										: "--"}{" "}
									marks
								</div>
								<div className="font-medium text-[#727272] md:text-[18px] text-[14px]">
									Your incorrect answers{" "}
									<span className="text-[#E31D1C]">
										{topicQuizResult?.wrong}
									</span>
									, so there is negative marking of{" "}
									{topicQuizResult?.negativeMarking} x {topicQuizResult?.wrong}{" "}
									={" "}
									{topicQuizResult !== null
										? formatNumber(
												topicQuizResult?.negativeMarking *
													topicQuizResult?.wrong,
											)
										: "--"}{" "}
									marks
								</div>
								<div className="font-medium text-[#727272] md:text-[18px] text-[14px] score-breakdown--final-percentage">
									So you scored {topicQuizResult?.score} out of{" "}
									{topicQuizResult?.totalMarks}, which resulted in{" "}
									<span className="text-[#4F29ED]">
										{topicQuizResult?.scorePercent}%
									</span>{" "}
								</div>
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

interface ResultModalProp {
	isOpen: boolean;
	onOpenChange: () => void;
}
