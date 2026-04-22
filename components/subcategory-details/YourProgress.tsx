"use client";
import { Progress } from "@heroui/react";
import { SubCateContext } from "@src/context/sub-category/SubCateContext";
import { useContext } from "react";

export default function YourProgress() {
	const { topicList, subCateDetails } = useContext(SubCateContext);
	return (
		<div className="py-8">
			<div className="section-container ">
				<div className="your-progress">
					<Progress
						classNames={{
							base: "max-w-full",
							track: "border border-default h-[10px]",
							indicator: "bg-linear-to-r from-[#4F29ED] to-[#9D00FF]",
							label: "font-normal text-black",
							value: "text-[#4F29ED] font-medium",
						}}
						label="Your Progress"
						radius="sm"
						showValueLabel={true}
						size="sm"
						value={subCateDetails?.progressPercentage || 0}
					/>
					<div className="your-progress-info">
						<div className="your-progress-text">
							{subCateDetails?.completedTopics || 0} of {topicList?.length}{" "}
							topics completed
						</div>
						<div className="your-progress-text-dot"></div>
						<div className="your-progress-text">Keep going!</div>
					</div>
				</div>
			</div>
		</div>
	);
}
