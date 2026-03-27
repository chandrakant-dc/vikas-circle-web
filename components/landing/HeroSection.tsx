import RightArrowIcon from "@src/svg/RightArrowIcon";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="hero-section-base">
			<div className="section-container flex items-center">
				<div className="hero-section-content-wrapper">
					<h1>Learn Skills</h1>
					<h2>That Actually Get You Hired</h2>
					<p className="mt-8">Structured learning paths combined with</p>
					<p> real-world projects to accelerate your career growth</p>
					<div className="flex items-center gap-4 mt-8">
						<Link href={"/"} className="cta-primary">
							Start Learning <RightArrowIcon />
						</Link>
						<Link href={"/"} className="cta-default">
							View Pricing <RightArrowIcon />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
