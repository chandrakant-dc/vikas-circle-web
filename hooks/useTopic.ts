import { getSubCategoryDetails } from "@src/services/category.service";
import { getAllTopicById } from "@src/services/topic.service";
import { useEffect, useState } from "react";

export default function useTopic(subcategoryId: string) {
	const [topicList, setTopicList] = useState<TopicListI[]>([]);
	const [subCateDetails, setSubCateDetails] = useState<TopicDetailsI | null>(
		null,
	);

	useEffect(() => {
		async function handleAllTopics(subcategoryId: string) {
			const resp = await getAllTopicById(subcategoryId);
			setTopicList(resp?.data?.data || []);
		}
		if (subcategoryId) handleAllTopics(subcategoryId);
	}, [subcategoryId]);

	useEffect(() => {
		async function handleSubCateDetails(subcategoryId: string) {
			const resp = await getSubCategoryDetails(subcategoryId);
			setSubCateDetails(resp?.data?.data || null);
		}
		if (subcategoryId) handleSubCateDetails(subcategoryId);
	}, [subcategoryId]);

	return {
		topicList,
		subCateDetails,
	};
}

export interface TopicListI {
	_id: string;
	topicName: string;
	status?: "completed" | "pending";
}

export interface TopicDetailsI {
	_id: string;
	name: string;
	category: {
		_id: string;
		name: string;
	};
	image: string;
	description: string;
	topicCount: number;
	completedTopics: number;
	progressPercentage: number;
}
