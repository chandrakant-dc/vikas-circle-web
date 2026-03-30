import { getQuestionByTopicId } from "@src/services/topic.service";
import { useEffect, useState } from "react";

export default function useTopicQuestions(topicId: string) {
	const [topicQues, setTopicQues] = useState<TopicQuesI[]>([]);

	useEffect(() => {
		async function handleTopicQues(topicId: string) {
			const resp = await getQuestionByTopicId(topicId);
			setTopicQues(resp?.data?.data || []);
		}
		if (topicId) handleTopicQues(topicId);
	}, [topicId]);

	return {
		topicQues,
	};
}

export interface TopicQuesI {
	_id: string;
	topic: string;
	question: string;
	option1: string;
	option2: string;
	option3: string;
	option4: string;
}
