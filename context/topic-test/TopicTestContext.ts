"use client";
import type { TopicDetailsI } from "@src/hooks/useTopicContent";
import type { TopicQuesI } from "@src/hooks/useTopicQuestions";
import { createContext } from "react";

interface TopicTestContextI {
	topicQuesList: TopicQuesI[];
	topicDetails: TopicDetailsI | null;
}

const initVal: TopicTestContextI = {
	topicQuesList: [],
	topicDetails: null,
};

export const TopicTestContext = createContext<TopicTestContextI>(initVal);
