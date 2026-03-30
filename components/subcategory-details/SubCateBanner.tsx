"use client";
import { SubCateContext } from "@src/context/sub-category/SubCateContext";
import ClockWhiteIcon from "@src/svg/ClockWhiteIcon";
import WhiteBookIcon from "@src/svg/WhiteBookIcon";
import { useContext } from "react";

export default function SubCateBanner() {
	const { subCateDetails } = useContext(SubCateContext);
	return (
		<div className="subcategory-page-banner">
			<div className="section-container flex items-center ">
				<div className="subcategory-page-banner-content">
					<div className="subcategory-tag">
						{subCateDetails?.category?.name}
					</div>
					<h2>{subCateDetails?.name}</h2>
					<p>{subCateDetails?.description}</p>
					<div className="subcategory-info">
						<div className="subcategory-info-wrap">
							<WhiteBookIcon />
							<span>{subCateDetails?.topicCount} Topics</span>
						</div>
						<div className="subcategory-info-wrap">
							<ClockWhiteIcon />
							<span>12 weeks</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
