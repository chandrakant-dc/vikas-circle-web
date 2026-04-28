"use client";
import RightArrowIcon from "@src/svg/RightArrowIcon";
import Link from "next/link";
import "./start-journey.css";

export default function StartJourney({
	title,
	desc,
	ctaLink,
	ctaText,
}: StartJourneyProps) {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="start-journey-base">
			<h2>{title}</h2>
			<p>{desc}</p>
			<Link href={ctaLink} onClick={handleScrollToTop} className="cta-default">
				{ctaText} <RightArrowIcon />
			</Link>
		</div>
	);
}

interface StartJourneyProps {
	title: string;
	desc: string;
	ctaText: string;
	ctaLink: string;
}
