import TopicIndex from "@src/components/topic-content/TopicIndex";
// import Script from "next/script";
export default async function TopicPage({
	params,
}: {
	params: Promise<{ topicId: string }>;
}) {
	const { topicId } = await params;
	return <TopicIndex topicId={topicId} />

}
