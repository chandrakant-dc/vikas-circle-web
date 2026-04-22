"use client";
import { SubCateContext } from "@src/context/sub-category/SubCateContext";
import RightArrowIcon from "@src/svg/RightArrowIcon";
import TopicPrimaryIcon from "@src/svg/TopicPrimaryIcon";
import TopicSuccessIcon from "@src/svg/TopicSuccessIcon";
import Link from "next/link";
import { useContext } from "react";

export default function LearningMaterial() {
	const { topicList, subCateDetails } = useContext(SubCateContext);

	return (
		<div className="bg-[#F9F9F9] py-8">
			<div className="section-container">
				<div className="section-header-container mb-8">
					<h2 className="max-w-135">Learning Material</h2>
					<p>
						Complete all {topicList.length} topics to master{" "}
						{subCateDetails?.name}
					</p>
				</div>

				{/* <div className="learning-topic-item completed">
					<div className="topic-item-info-wrap">
						<TopicCompletedIcon />
						<div className="topic-item-info">
							<div className="topic-item-info-stats">
								<span className="topic-item-count">Topic 01</span>
								<span className="topic-item-status">Completed</span>
							</div>
							<div className="topic-item-name">What is DevOps</div>
						</div>
					</div>
					<div className="topic-item-cta-wrap">
						<Link href={"/"} className="cta-default h-[40px]!">
							Learn Now <RightArrowIcon />
						</Link>
					</div>
				</div> */}

				{topicList.map((item, i) => (
					<div
						className={`learning-topic-item ${item?.status === "completed" ? "completed" : "pending"}`}
						key={`topic-${i + 1}`}
					>
						<div className="topic-item-info-wrap">
							{item?.status === "completed" ? (
								<TopicSuccessIcon />
							) : (
								<TopicPrimaryIcon />
							)}
							<div className="topic-item-info">
								<div className="topic-item-info-stats">
									<span className="topic-item-count">Topic {i + 1}</span>
									<span className="topic-item-status">
										{item?.status || "Pending"}
									</span>
								</div>
								<div className="topic-item-name">{item?.topicName}</div>
							</div>
						</div>
						<div className="topic-item-cta-wrap">
							<Link
								href={`/topic/${item?._id}`}
								target="_blank"
								className={`cta-primary h-10! ${item?.status === "completed" ? " completed" : ""}`}
							>
								Learn Now <RightArrowIcon />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
