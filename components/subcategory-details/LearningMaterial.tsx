import RightArrowIcon from "@src/svg/RightArrowIcon";
import TopicCompletedIcon from "@src/svg/TopicCompletedIcon";
import TopicPrimaryIcon from "@src/svg/TopicPrimaryIcon";
import Link from "next/link";

export default function LearningMaterial() {
	return (
		<div className="bg-[#F9F9F9] py-8">
			<div className="section-container">
				<div className="section-header-container mb-8">
					<h2 className="max-w-135">Learning Material</h2>
					<p>Complete all 50 topics to master DevOps</p>
				</div>

				<div className="learning-topic-item completed">
					<div className="topic-item-info-wrap">
						<TopicCompletedIcon />
						<div className="topic-item-info">
							<div className="topic-item-info-stats">
								<span className="topic-item-count">Topic 01</span>
								<span className="topic-item-status">Completed</span>
							</div>
							<div className="topic-item-name">What is DevOps</div>
						</div>
					</div>
					<div className="topic-item-cta-wrap">
						<Link href={"/"} className="cta-default h-[40px]!">
							Learn Now <RightArrowIcon />
						</Link>
					</div>
				</div>

				<div className="learning-topic-item">
					<div className="topic-item-info-wrap">
						<TopicPrimaryIcon />
						<div className="topic-item-info">
							<div className="topic-item-info-stats">
								<span className="topic-item-count">Topic 03</span>
								<span className="topic-item-status">Pending</span>
							</div>
							<div className="topic-item-name">SDLC basics</div>
						</div>
					</div>
					<div className="topic-item-cta-wrap">
						<Link href={"/"} className="cta-primary h-[40px]!">
							Learn Now <RightArrowIcon />
						</Link>
					</div>
				</div>
				<div className="learning-topic-item">
					<div className="topic-item-info-wrap">
						<TopicPrimaryIcon />
						<div className="topic-item-info">
							<div className="topic-item-info-stats">
								<span className="topic-item-count">Topic 03</span>
								<span className="topic-item-status">Pending</span>
							</div>
							<div className="topic-item-name">SDLC basics</div>
						</div>
					</div>
					<div className="topic-item-cta-wrap">
						<Link href={"/"} className="cta-primary h-[40px]!">
							Learn Now <RightArrowIcon />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
