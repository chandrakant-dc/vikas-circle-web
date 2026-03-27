"use client";

import { Progress } from "@heroui/react";
import ClockPrimaryIcon from "@src/svg/ClockPrimaryIcon";
import PrimaryBookIcon from "@src/svg/PrimaryBookIcon";
import RightArrowIcon from "@src/svg/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";

export default function ExploreCard() {
	return (
		<div className="explore-card">
			<div className="explore-card-img-wrap">
				<Image
					src={"/blog-card-bg-1.jpg"}
					alt="blog-card-img"
					height={200}
					width={200}
				/>
			</div>
			<div className="explore-card-content">
				<div className="explore-cared-tag">Tech & IT</div>
				<div className="explore-title">DevOps</div>
				<div className="explore-description">
					Learn HTML, CSS, JavaScript, React, Node.js and build real-world
					projects from scratch.
				</div>
				<div className="explore-info">
					<div className="explore-info-wrap">
						<PrimaryBookIcon />
						<span>50 Topics</span>
					</div>
					<div className="explore-info-wrap">
						<ClockPrimaryIcon />
						<span>12 weeks</span>
					</div>
				</div>
				<Progress
					classNames={{
						base: "max-w-md",
						track: "border border-default h-[5px]",
						indicator: "bg-linear-to-r from-[#4F29ED] to-[#9D00FF]",
						label: "font-light text-default-600",
						value: "text-[#4F29ED] font-medium",
					}}
					label="Progress"
					radius="sm"
					showValueLabel={true}
					size="sm"
					value={65}
				/>
				<Link href={"/"} className="cta-primary max-w-full!">
					View More <RightArrowIcon />
				</Link>
			</div>
		</div>
	);
}
