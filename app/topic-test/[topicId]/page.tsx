import TopicTestIndex from "@src/components/topic-test/TopicTestIndex";

export default async function TopicTestPage({
	params,
}: {
	params: Promise<{ topicId: string }>;
}) {
	const { topicId } = await params;

	return <TopicTestIndex topicId={topicId} />;
}
