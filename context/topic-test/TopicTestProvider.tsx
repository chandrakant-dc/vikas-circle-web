"use client";
import useTopicContent from "@src/hooks/useTopicContent";
import useTopicQuestions from "@src/hooks/useTopicQuestions";
import { TopicTestContext } from "./TopicTestContext";

export default function TopicTestProvider({
	children,
	topicId,
}: {
	children: React.ReactNode;
	topicId: string;
}) {
	const { topicQues, handleSubmitQuiz, topicQuizResult } =
		useTopicQuestions(topicId);
	const { topicDetails } = useTopicContent(topicId);
	return (
		<TopicTestContext.Provider
			value={{
				topicQuesList: topicQues,
				topicDetails,
				handleSubmitQuiz,
				topicQuizResult,
			}}
		>
			{children}
		</TopicTestContext.Provider>
	);
}
