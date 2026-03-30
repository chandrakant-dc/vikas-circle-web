"use client";
import useTopicContent from "@src/hooks/useTopicContent";
import { TopicDetailContext } from "./TopicDetailContext";

export default function TopicDetailProvider({
	children,
	topicId,
}: {
	children: React.ReactNode;
	topicId: string;
}) {
	const { topicDetails } = useTopicContent(topicId);
	return (
		<TopicDetailContext.Provider
			value={{
				topicDetails,
			}}
		>
			{children}
		</TopicDetailContext.Provider>
	);
}
