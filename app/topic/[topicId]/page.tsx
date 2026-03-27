import TopicIndex from "@src/components/topic-content/TopicIndex";

export default async function TopicPage({
	params,
}: {
	params: Promise<{ topicId: string }>;
}) {
	const { topicId } = await params;
	return <TopicIndex topicId={topicId} />;
}
