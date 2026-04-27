"use client";
import useCategory from "@src/hooks/useCategory";
import BusinessIcon from "@src/svg/BusinessIcon";
import CareerIcon from "@src/svg/CareerIcon";
import DataAnalyticsIcon from "@src/svg/DataAnalyticsIcon";
import DesignIcon from "@src/svg/DesignIcon";
import FinanceIcon from "@src/svg/FinanceIcon";
import MarketingIcon from "@src/svg/MarketingIcon";
import PersonalityIcon from "@src/svg/PersonalityIcon";
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
							index={i}
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
	index,
}: {
	name: string;
	image: string;
	id: string;
	index: number;
}) {
	return (
		<Link href={`/explore?filter=${id}`} className="explore-card-main">
			<Image src={image} alt="explore-card-img" height={500} width={500} />
			<div className="explore-card-content-main">
				<div className="explore-card-main-svg-wrap">
					{iconList[index]?.icon || <TechPrimaryBoxIcon />}
				</div>
				<div className="explore-content-info">
					<h6>{name}</h6>
					<RightChevronArrowIcon />
				</div>
			</div>
		</Link>
	);
}

const iconList = [
	{
		icon: <TechPrimaryBoxIcon />,
	},
	{
		icon: <DataAnalyticsIcon />,
	},
	{
		icon: <BusinessIcon />,
	},
	{
		icon: <FinanceIcon />,
	},
	{
		icon: <MarketingIcon />,
	},
	{
		icon: <DesignIcon />,
	},
	{
		icon: <PersonalityIcon />,
	},
	{
		icon: <CareerIcon />,
	},
];
