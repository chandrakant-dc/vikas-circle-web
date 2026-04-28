"use client";
import { AppContext } from "@src/context/global/AppContext";
import TopicTestProvider from "@src/context/topic-test/TopicTestProvider";
import { useTracking } from "@src/hooks/useTracking";
import { useContext } from "react";
import "./topic.css";
import TopicTestSection from "./TopicTestSection";
export default function TopicTestIndex({ topicId }: { topicId: string }) {
	const { userDetails } = useContext(AppContext);
	useTracking(userDetails?.isLoggedIn);

	return (
		<TopicTestProvider topicId={topicId}>
			<div className="topic-test-base">
				<TopicTestSection />
			</div>
		</TopicTestProvider>
	);
}
