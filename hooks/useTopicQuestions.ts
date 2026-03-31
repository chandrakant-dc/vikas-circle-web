import { addToast } from "@heroui/react";
import {
	getQuestionByTopicId,
	type TopicQuizQuesAns,
	topicQuizSubmit,
} from "@src/services/topic.service";
import { useEffect, useState } from "react";

export default function useTopicQuestions(topicId: string) {
	const [topicQues, setTopicQues] = useState<TopicQuesI[]>([]);
	const [topicQuizResult, setTopicQuizResult] =
		useState<TopicQuizResult | null>(null);

	useEffect(() => {
		async function handleTopicQues(topicId: string) {
			const resp = await getQuestionByTopicId(topicId);
			setTopicQues(resp?.data?.data || []);
		}
		if (topicId) handleTopicQues(topicId);
	}, [topicId]);

	async function handleSubmitQuiz(data: TopicQuizQuesAns[]) {
		const payload = {
			answers: data,
		};
		const resp = await topicQuizSubmit(payload);
		setTopicQuizResult(resp?.data?.data || null);
		addToast({
			title: "Quiz Submitted!",
			color: "success",
		});
	}

	return {
		topicQues,
		handleSubmitQuiz,
		topicQuizResult,
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

export interface TopicQuizResult {
	total: number;
	correct: number;
	wrong: number;
	notAnswered: number;
	score: number;
	maxMarkPerQuestion: number;
	negativeMarking: number;
	scorePercent: number;
	totalMarks: number;
}
