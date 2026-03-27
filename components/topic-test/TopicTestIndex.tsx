import { Divider } from "@heroui/react";
import "./topic.css";
export default function TopicTestIndex({ topicId }: { topicId: string }) {
	console.log("topicId test", topicId);

	return (
		<div>
			<div className="section-container">
				<div className="topic-test-container">
					<div className="topic-test-ques-container">
						<div className="text-[12px] text-[#4F29ED] font-semibold">
							What is DevOps?
						</div>
						<div className="text-[#202020] text-[20px] font-semibold">
							Question No.: 01
						</div>
						<div className="text-[#202020] text-[20px] font-semibold">
							DevOps stands for?
						</div>
						<div className="flex flex-col gap-4 mt-8">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="border border-[#54545480]  bg-[#5454541A] w-[48px] h-[48px] rounded-full flex items-center justify-center font-bold">
										A
									</div>
									<div>Development Only</div>
								</div>
								<div className="w-[48px] h-[48px] rounded-full bg-white border border-[#54545480]"></div>
							</div>
							<Divider className="my-4" />
							<div className="flex flex-col gap-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div className="border border-[#54545480]  bg-[#5454541A] w-[48px] h-[48px] rounded-full flex items-center justify-center font-bold">
											B
										</div>
										<div>Development Only</div>
									</div>
									<div className="w-[48px] h-[48px] rounded-full bg-white border border-[#54545480]"></div>
								</div>
							</div>
							<Divider className="my-4" />
							<div className="flex flex-col gap-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div className="border border-[#54545480]  bg-[#5454541A] w-[48px] h-[48px] rounded-full flex items-center justify-center font-bold">
											C
										</div>
										<div>Development Only</div>
									</div>
									<div className="w-[48px] h-[48px] rounded-full bg-white border border-[#54545480]"></div>
								</div>
							</div>
							<Divider className="my-4" />
							<div className="flex flex-col gap-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div className="border border-[#54545480]  bg-[#5454541A] w-[48px] h-[48px] rounded-full flex items-center justify-center font-bold">
											D
										</div>
										<div>Development Only</div>
									</div>
									<div className="w-[48px] h-[48px] rounded-full bg-white border border-[#54545480]"></div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center justify-between my-4">
							<button
								type="button"
								className="cta-default min-w-[200px] border border-[#4F29ED] text-[#4F29ED]! "
							>
								Mark for later
							</button>
							<div className="flex items-center gap-4">
								<button type="button" className="cta-default min-w-[200px]">
									Previous
								</button>
								<button type="button" className="cta-primary min-w-[200px]">
									Save & Next
								</button>
							</div>
						</div>
						<div className="flex w-full items-center justify-center gap-4">
							<div className="flex items-center gap-4">
								<div className="bg-[#259800] w-[37px] h-[37px] rounded-full text-white flex items-center justify-center">
									1
								</div>
								<div className="">Attempted</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-[#4F29ED] w-[37px] h-[37px] rounded-full text-white flex items-center justify-center">
									1
								</div>
								<div className="">Marked of later</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="bg-[#54545480] w-[37px] h-[37px] rounded-full text-white flex items-center justify-center">
									1
								</div>
								<div className="">Not attempted</div>
							</div>
						</div>
					</div>
					<div className="topic-test-count-container">
						<div className="topic-test-info-card">
							<div className="text-white text-[14px]">DevOps</div>
							<div className="text-white text-[12px]">Topic - 01</div>
						</div>
						<div className="topic-test-question-count-container">
							<div className="flex items-center justify-between">
								<div>Questions</div>
								<div className="flex items-center justify-center text-[#4F29ED] border border-[#4F29ED] w-[100px] h-[30px] rounded-lg">
									50
								</div>
							</div>
							<div className="count-container">
								{Array(5)
									.fill("")
									.map((_, i) => (
										<div
											key={`count-${i + 1}`}
											className="bg-[#54545480] w-[37px] h-[37px] rounded-full text-white flex items-center justify-center"
										>
											{i + 1}
										</div>
									))}
							</div>
							<button
								type="button"
								className="cta-primary min-w-[200px] max-w-full!"
							>
								Submit Test
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
