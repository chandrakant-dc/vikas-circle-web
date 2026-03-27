"use client";
import { User } from "@heroui/react";
import ReviewStarIcon from "@src/svg/ReviewStarIcon";

export default function Testimonials() {
	return (
		<div className="testimonials-section-base">
			<div className="section-container flex flex-col justify-center">
				<div className="section-header-container mb-8">
					<h2>What Our Learners Say</h2>
					<p>
						Join thousands of professionals who have transformed their careers
						with us
					</p>
				</div>
				<div className="testimonials-review-section">
					<div className="flex items-center gap-4">
						{list.map((item, i) => (
							<TestimonialCard
								key={`review-${i + 1}`}
								name={item?.name}
								description={item?.description}
								review={item?.review}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function TestimonialCard({
	name,
	description,
	review,
}: {
	name: string;
	description: string;
	review: string;
}) {
	return (
		<div className="testimonial-card">
			<User
				avatarProps={{
					src: "/user.png",
					classNames: {
						img: "w-[60px] h-[60px]",
						base: "w-[60px] h-[60px]",
					},
				}}
				classNames={{
					description: "text-[16px]",
					name: "text-[16px] font-medium",
					base: "gap-8",
				}}
				description={description}
				name={name}
			/>
			<div className="testimonial-review-stars">
				{Array(5)
					.fill("")
					.map((_, i) => (
						<ReviewStarIcon key={`star-${i + 1}`} />
					))}
			</div>
			<p>{review}</p>
		</div>
	);
}

const list = [
	{
		name: "Priya Sharma",
		description: "Software Developer",
		review:
			"Vikas Circle transformed my career! The structured courses and real-world projects helped me land my dream job in just 6 months.",
	},
	{
		name: "Rahul Kumar",
		description: "Data Analyst",
		review:
			"The quality of courses is exceptional. The instructors are knowledgeable and the community support is amazing. Highly recommended!",
	},
	{
		name: "Anjali Patel",
		description: "Marketing Manager",
		review:
			"Best investment in my professional development. The courses are practical, engaging, and immediately applicable to my work.",
	},
	{
		name: "Priya Sharma",
		description: "Software Developer",
		review:
			"Vikas Circle transformed my career! The structured courses and real-world projects helped me land my dream job in just 6 months.",
	},
	{
		name: "Rahul Kumar",
		description: "Data Analyst",
		review:
			"The quality of courses is exceptional. The instructors are knowledgeable and the community support is amazing. Highly recommended!",
	},
	{
		name: "Anjali Patel",
		description: "Marketing Manager",
		review:
			"Best investment in my professional development. The courses are practical, engaging, and immediately applicable to my work.",
	},
];
