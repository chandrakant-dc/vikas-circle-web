import { Divider } from "@heroui/react";
import ActiveDotIcon from "@src/svg/ActiveDotIcon";

export default function ExploreFilter() {
	return (
		<div className="explore-filter">
			<div className="explore-filter-label">Filter by Category</div>
			<Divider className="my-2" />
			{list.map((name, i) => (
				<div
					key={`explore-filter-${i + 1}`}
					className={`filter-item ${i === 0 ? "active" : ""}`}
				>
					<span>{name}</span>
					{i === 0 && <ActiveDotIcon />}
				</div>
			))}
		</div>
	);
}

const list = [
	"Tech & IT",
	"Data & Analytics",
	"Business & Management",
	"Finance & Accounting",
	"Data & Analytics",
	"Design & Creativity",
	"Personal Development",
	"Career & Job Preparation",
];
