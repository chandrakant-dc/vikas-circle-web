"use client";
import { TopicDetailContext } from "@src/context/topic-content/TopicDetailContext";
import { useContext } from "react";

export default function TopicBanner() {
	const { topicDetails } = useContext(TopicDetailContext);
	return (
		<div className="topic-page-banner">
			<div className="section-container flex items-center ">
				<div className="topic-page-banner-content">
					<h2>{topicDetails?.topicName}</h2>
					<p>
						Master the principles, practices, and tools that drive modern
						software development and operations
					</p>
				</div>
			</div>
		</div>
	);
}
