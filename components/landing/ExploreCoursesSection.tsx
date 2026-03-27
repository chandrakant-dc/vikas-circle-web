import RightChevronArrowIcon from "@src/svg/RightChevronArrowIcon";
import TechPrimaryBoxIcon from "@src/svg/TechPrimaryBoxIcon";
import Image from "next/image";

export default function ExploreCoursesSection() {
	return (
		<div className="explore-course-section-base">
			<div className="section-container flex flex-col justify-center">
				<div className="section-header-container mb-8">
					<h2>Explore Courses</h2>
					<p>
						Choose from a wide range of professional courses designed to
						accelerate your career growth
					</p>
				</div>
				<div className="explore-card-container">
					{Array(8)
						.fill("")
						.map((_, i) => (
							<ExploreCard key={`explore-card-${i + 1}`} />
						))}
				</div>
			</div>
		</div>
	);
}

function ExploreCard() {
	return (
		<div className="explore-card">
			<Image
				src={"/explore-card-bg-1.jpg"}
				alt="explore-card-img"
				height={200}
				width={200}
			/>
			<div className="explore-card-content">
				<div>
					<TechPrimaryBoxIcon />
				</div>
				<div className="explore-content-info">
					<h6>Tech & IT</h6>
					<RightChevronArrowIcon />
				</div>
			</div>
		</div>
	);
}
