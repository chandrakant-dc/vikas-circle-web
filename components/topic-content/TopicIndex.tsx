"use client";
import { AppContext } from "@src/context/global/AppContext";
import TopicDetailProvider from "@src/context/topic-content/TopicDetailProvider";
import { useTracking } from "@src/hooks/useTracking";
import { useContext } from "react";
import "./topic-content.css";
import TopicBanner from "./TopicBanner";
import TopicContent from "./TopicContent";

export default function TopicIndex({ topicId }: { topicId: string }) {
	const { userDetails } = useContext(AppContext);
	useTracking(userDetails?.isLoggedIn);

	return (
		<TopicDetailProvider topicId={topicId}>
			<TopicBanner />
			<TopicContent />
		</TopicDetailProvider>
	);
}
