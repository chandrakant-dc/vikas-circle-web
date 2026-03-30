"use client";
import type { TopicDetailsI, TopicListI } from "@src/hooks/useTopic";
import { createContext } from "react";

interface SubCateContextI {
	topicList: TopicListI[];
	subCateDetails: TopicDetailsI | null;
}

const initVal: SubCateContextI = {
	topicList: [],
	subCateDetails: null,
};

export const SubCateContext = createContext<SubCateContextI>(initVal);
