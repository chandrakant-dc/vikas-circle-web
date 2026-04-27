"use client";

import { AppContext } from "@src/context/global/AppContext";
import useActiveCourses from "@src/hooks/useActiveCourses";
import { useContext, useEffect } from "react";
import ExploreCard from "../explore/ExploreCard";
import "../explore/explore.css";
export default function ActiveCourses() {
	const { handleGetActiveCourses, activeCourseList } = useActiveCourses();
	const { userDetails } = useContext(AppContext);

	useEffect(() => {
		if (userDetails?.isLoggedIn) {
			handleGetActiveCourses();
		}
	}, [userDetails, handleGetActiveCourses]);

	return (
		<div className="active-courses-section-base">
			<div className="section-container flex flex-col justify-start">
				<div className="section-header-container mb-8">
					<h2>Active Courses</h2>
					<p>Continue learning with your active courses</p>
				</div>
				<div>
					{activeCourseList.length === 0 && (
						<p className="text-[#545454] text-[14px]">
							No Active Course available
						</p>
					)}
					{activeCourseList.map((item, i) => (
						<div key={`active-course-section-${i + 1}`} className="mb-8">
							<div className="active-course-category-name">
								{item?.categoryName}
							</div>
							<div className="explore-cards-container">
								{item?.allStudiedSubCategory.map((course, idx) => (
									<ExploreCard
										key={`explore-card-${idx + 1}`}
										id={course?._id}
										name={course?.name}
										image={course?.image}
										description={course?.description}
										overallPercentage={course?.overallPercentage}
										categoryName={course?.category?.name}
										topicCount={course?.topicCount}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
