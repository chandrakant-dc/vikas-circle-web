"use client";

import { getTopicDetailsById } from "@src/services/topic.service";
import { useEffect, useState } from "react";

export default function useTopicContent(topicId: string) {
	const [topicDetails, setTopicDetails] = useState<TopicDetailsI | null>(null);

	useEffect(() => {
		async function handleTopicDetails(topicId: string) {
			const resp = await getTopicDetailsById(topicId);
			setTopicDetails(resp?.data?.data || null);
		}
		if (topicId) handleTopicDetails(topicId);
	}, [topicId]);

	return {
		topicDetails,
	};
}

export interface TopicDetailsI {
	_id: string;
	topicName: string;
	description: string;
}
