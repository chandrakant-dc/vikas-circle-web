"use client";
import { ExploreContext } from "@src/context/explore/ExploreContext";
import { useContext } from "react";
import StartJourney from "../start-journey/StartJourney";
import "./explore.css";
import ExploreBanner from "./ExploreBanner";
import ExploreCard from "./ExploreCard";
import ExploreFilter from "./ExploreFilter";
import ExploreSearchbar from "./ExploreSearchbar";
import MobileExploreFilter from "./MobileExploreFilter";

export default function ExploreIndex() {
	const { subCategoryList } = useContext(ExploreContext);
	return (
		<div>
			<ExploreBanner />
			<div className="section-container pb-8!">
				<ExploreSearchbar />
				<MobileExploreFilter />
				<div className="explore-main-section">
					<div className="explore-filter-container">
						<ExploreFilter />
					</div>
					<div className="explore-cards-container">
						{subCategoryList.map((item, i) => (
							<ExploreCard
								key={`explore-card-${i + 1}`}
								id={item?._id}
								name={item?.name}
								image={item?.image}
								description={item?.description}
								overallPercentage={item?.overallPercentage}
								categoryName={item?.category?.name}
								topicCount={item?.topicCount}
							/>
						))}
					</div>
				</div>
			</div>
			<StartJourney
				title="Start your learning journey today"
				desc="Join thousands of learners who are mastering new skills and advancing their careers"
				ctaText="Start Now"
				ctaLink="/explore"
			/>
		</div>
	);
}
