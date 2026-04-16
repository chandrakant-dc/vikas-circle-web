import { Divider } from "@heroui/react";
import { blogs } from "@src/data/blogs";
import CalenderPrimaryIcon from "@src/svg/CalenderPrimaryIcon";
import RightArrowIcon from "@src/svg/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";
export default function BlogSection() {

	return (
		<div className="blog-section-base">
			<div className="section-container flex flex-col justify-center">
				<div className="section-header-container mb-8">
					<h2 className="max-w-135">
						Learning Insights & Resources, Explore Our Blog
					</h2>
					<p>
						Explore expert articles, tips, and insights to enhance your
						professional development journey.
					</p>
				</div>
				<div className="blog-card-wrapper">
					<div className="flex items-center gap-8">
						{blogs.map((item, i) => (
							<BlogCard
								key={`blog-card-${i + 1}`}
								title={item?.title}
								tag={item?.tag}
								description={item?.description}
								date={item?.date}
								slug={item?.slug}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function BlogCard({
	title,
	tag,
	description,
	date,
	slug
}: {
	title: string;
	tag: string;
	description: string;
	date: string;
	slug: string;
}) {
	return (
		<div className="blog-card">
			<div className="blog-card-img-wrap">
				<Image
					src={"/blog-card-bg-1.jpg"}
					alt="blog-card-img"
					height={200}
					width={200}
				/>
				<div className="blog-tag">{tag}</div>
			</div>
			<h4>{title}</h4>
			<p>{description}</p>
			<Divider className="mt-4 bg-[#9D00FF]" />
			<div className="blog-date-wrap">
				<CalenderPrimaryIcon />
				<div className="blog-date">{date}</div>
			</div>
			<Link href={`/blog/${slug}`} className="cta-primary max-w-full!">
				Read More <RightArrowIcon />
			</Link>
		</div>
	);
}



const list = [
	{
		tag: "Tech & IT",
		title: "The 2026 DevOps Roadmap: From Beginner to Pro",
		description:
			"Discover the must-learn tools and certifications to land a high-paying DevOps role this year.",
		date: "Jan 20, 2026",
	},
	{
		tag: "Data & Analytics",
		title: "The Ethics of Data: How to Handle Privacy in the AI Era",
		description:
			"With great data comes great responsibility. A simple guide to understanding GDPR, data poisoning, & ethical AI for beginners.",
		date: "Mar 15, 2026",
	},
	{
		tag: "Personal Development",
		title: "Habit Stacking: The Secret to Learning 2x Faster",
		description:
			"Struggling to find time to study? Learn how to 'stack' new learning habits onto your daily routine for consistent, growth.",
		date: "Feb 10, 2026",
	},
	{
		tag: "Tech & IT",
		title: "The 2026 DevOps Roadmap: From Beginner to Pro",
		description:
			"Discover the must-learn tools and certifications to land a high-paying DevOps role this year.",
		date: "Jan 20, 2026",
	},
	{
		tag: "Data & Analytics",
		title: "The Ethics of Data: How to Handle Privacy in the AI Era",
		description:
			"With great data comes great responsibility. A simple guide to understanding GDPR, data poisoning, & ethical AI for beginners.",
		date: "Mar 15, 2026",
	},
	{
		tag: "Personal Development",
		title: "Habit Stacking: The Secret to Learning 2x Faster",
		description:
			"Struggling to find time to study? Learn how to 'stack' new learning habits onto your daily routine for consistent, growth.",
		date: "Feb 10, 2026",
	},
];
