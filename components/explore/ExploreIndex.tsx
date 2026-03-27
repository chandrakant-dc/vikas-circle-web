import StartJourney from "../start-journey/StartJourney";
import ExploreBanner from "./ExploreBanner";
import ExploreCard from "./ExploreCard";
import ExploreFilter from "./ExploreFilter";
import ExploreSearchbar from "./ExploreSearchbar";
import "./explore.css";

export default function ExploreIndex() {
	return (
		<div>
			<ExploreBanner />
			<div className="section-container">
				<ExploreSearchbar />
				<div className="explore-main-section">
					<div className="explore-filter-container">
						<ExploreFilter />
					</div>
					<div className="explore-cards-container">
						{Array(9)
							.fill("")
							.map((_, i) => (
								<ExploreCard key={`explore-card-${i + 1}`} />
							))}
					</div>
				</div>
			</div>
			<StartJourney
				title="Start your learning journey today"
				desc="Join thousands of learners who are mastering new skills and advancing their careers"
				ctaText="Start Now"
				ctaLink="/"
			/>
		</div>
	);
}
