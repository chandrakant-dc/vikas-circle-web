"use client";
import { Divider } from "@heroui/react";
import { TopicDetailContext } from "@src/context/topic-content/TopicDetailContext";
import parse from "html-react-parser";
import { useContext } from "react";
import StartJourney from "../start-journey/StartJourney";
export default function TopicContent() {
	const { topicDetails } = useContext(TopicDetailContext);

	return (
		<div className="section-container py-8 topic-section-container">
			<div className="topic-content">
				{topicDetails?.description ? parse(topicDetails?.description) : "NA"}
			</div>
			<Divider className="my-4 bg-[#4F29ED]" />
			<StartJourney
				title="Test Your Knowledge"
				desc="Take the quiz to see how well you understand concepts"
				ctaText="Start Quiz"
				ctaLink={`/topic-test/${topicDetails?._id}`}
			/>
		</div>
	);
}
