"use client";
import type { TopicDetailsI } from "@src/hooks/useTopicContent";
import type { TopicQuesI, TopicQuizResult } from "@src/hooks/useTopicQuestions";
import type { TopicQuizQuesAns } from "@src/services/topic.service";
import { createContext } from "react";

interface TopicTestContextI {
	topicQuesList: TopicQuesI[];
	topicDetails: TopicDetailsI | null;
	handleSubmitQuiz(data: TopicQuizQuesAns[]): Promise<void>;
	topicQuizResult: TopicQuizResult | null;
}

const initVal: TopicTestContextI = {
	topicQuesList: [],
	topicDetails: null,
	handleSubmitQuiz: async () => {},
	topicQuizResult: null,
};

export const TopicTestContext = createContext<TopicTestContextI>(initVal);
