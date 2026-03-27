import "./topic-content.css";
import TopicBanner from "./TopicBanner";
import TopicContent from "./TopicContent";

export default function TopicIndex({ topicId }: { topicId: string }) {
	console.log("topicId", topicId);

	return (
		<div>
			<TopicBanner />
			<TopicContent />
		</div>
	);
}
