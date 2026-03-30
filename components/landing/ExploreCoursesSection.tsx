"use client";
import useCategory from "@src/hooks/useCategory";
import RightChevronArrowIcon from "@src/svg/RightChevronArrowIcon";
import TechPrimaryBoxIcon from "@src/svg/TechPrimaryBoxIcon";
import Image from "next/image";
import Link from "next/link";

export default function ExploreCoursesSection() {
	const { categoryList } = useCategory();
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
					{categoryList.map((item, i) => (
						<ExploreCard
							key={`explore-card-${i + 1}`}
							name={item?.name}
							image={item?.image}
							id={item?._id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function ExploreCard({
	name,
	image,
	id,
}: {
	name: string;
	image: string;
	id: string;
}) {
	return (
		<Link href={`/explore?filter=${id}`} className="explore-card">
			<Image src={image} alt="explore-card-img" height={200} width={200} />
			<div className="explore-card-content-main">
				<div>
					<TechPrimaryBoxIcon />
				</div>
				<div className="explore-content-info">
					<h6>{name}</h6>
					<RightChevronArrowIcon />
				</div>
			</div>
		</Link>
	);
}
