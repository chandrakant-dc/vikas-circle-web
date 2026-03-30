"use client";
import type { TopicDetailsI } from "@src/hooks/useTopicContent";
import { createContext } from "react";

interface TopicDetailContextI {
	topicDetails: TopicDetailsI | null;
}

const initVal: TopicDetailContextI = {
	topicDetails: null,
};

export const TopicDetailContext = createContext<TopicDetailContextI>(initVal);
