"use client";
import { Divider } from "@heroui/react";
import { ExploreContext } from "@src/context/explore/ExploreContext";
import ActiveDotIcon from "@src/svg/ActiveDotIcon";
import { useContext } from "react";

export default function ExploreFilter() {
	const { categoryList, handleUpdateSearchParam, categoryId } =
		useContext(ExploreContext);
	return (
		<div className="explore-filter">
			<div className="explore-filter-label">Filter by Category</div>
			<Divider className="my-2" />
			{categoryList.map((item, i) => (
				<button
					type="button"
					key={`explore-filter-${i + 1}`}
					className={`filter-item ${categoryId === item?._id ? "active" : ""}`}
					onClick={() => handleUpdateSearchParam(item?._id)}
				>
					<span>{item?.name}</span>
					{categoryId === item?._id && <ActiveDotIcon />}
				</button>
			))}
		</div>
	);
}

// const list = [
// 	"Tech & IT",
// 	"Data & Analytics",
// 	"Business & Management",
// 	"Finance & Accounting",
// 	"Data & Analytics",
// 	"Design & Creativity",
// 	"Personal Development",
// 	"Career & Job Preparation",
// ];
