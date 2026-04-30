import TopicIndex from "@src/components/topic-content/TopicIndex";
import type { Metadata } from "next";

export const metadata: Metadata = {
	other: {
		"google-adsense-account": "ca-pub-9872794516401798",
	},
};
export default async function TopicPage({
	params,
}: {
	params: Promise<{ topicId: string }>;
}) {
	const { topicId } = await params;
	return <TopicIndex topicId={topicId} />

}
