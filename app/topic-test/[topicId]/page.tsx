import TopicTestIndex from "@src/components/topic-test/TopicTestIndex";
import Script from "next/script";
export default async function TopicTestPage({
	params,
}: {
	params: Promise<{ topicId: string }>;
}) {
	const { topicId } = await params;

	return <>
		<Script
			id="google-adsense"
			async
			strategy="afterInteractive"
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872794516401798"
			crossOrigin="anonymous"
		/>
		<TopicTestIndex topicId={topicId} />
	</>
}
