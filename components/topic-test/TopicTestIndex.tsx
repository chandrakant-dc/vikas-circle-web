import TopicTestProvider from "@src/context/topic-test/TopicTestProvider";
import "./topic.css";
import TopicTestSection from "./TopicTestSection";
export default function TopicTestIndex({ topicId }: { topicId: string }) {
	console.log("topicId test", topicId);

	return (
		<TopicTestProvider topicId={topicId}>
			<TopicTestSection />
		</TopicTestProvider>
	);
}
