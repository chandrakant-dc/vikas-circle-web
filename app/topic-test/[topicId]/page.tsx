import TopicTestIndex from "@src/components/topic-test/TopicTestIndex";
import type { Metadata } from "next";

export const metadata: Metadata = {
	other: {
		"google-adsense-account": "ca-pub-9872794516401798",
	},
};

export default async function TopicTestPage({
	params,
}: {
	params: Promise<{ topicId: string }>;
}) {
	const { topicId } = await params;

	return <TopicTestIndex topicId={topicId} />
}
