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
								url={item?.url}
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
	url
}: {
	name: string;
	description: string;
	review: string;
	url: string;
}) {
	return (
		<div className="testimonial-card">
			<User
				avatarProps={{
					src: `/testimonial/${url}`,
					classNames: {
						img: "w-[60px] h-[60px]",
						base: "w-[60px] h-[60px] avatar-img-wrap",
					},
				}}
				classNames={{
					description: "text-[16px]",
					name: "text-[16px] font-medium",
					base: "gap-8 avatar-base",
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
		name: "Aisha",
		url: "/female-user-1.png",
		description: "College Student",
		review: `I joined Vikas Circle while preparing for my entrance exams. The practical courses in Data Analytics and Full Stack Development helped me stay ahead and confident.`,
	},
	{
		name: "Raj",
		url: "/male-user-1.png",
		description: "College Student",
		review: `The AI and Machine Learning courses gave me hands-on experience that no theory book could. It boosted my skills for both exams and projects`,
	},
	{
		name: "Sneha",
		url: "/female-user-2.png",
		description: "Exam-Prep Student",
		review: `Vikas Circle’s structured approach helped me manage exam prep alongside learning tech skills. I feel more productive and career-ready.`,
	},
	{
		name: "Mr. Kapoor",
		url: "/male-user-2.png",
		description: "Parent",
		review: `As a parent, I’ve seen my child explore advanced tech and business courses without spending thousands. Vikas Circle makes premium learning accessible`,
	},
	{
		name: "Ms. Rathi",
		url: "/female-user-3.png",
		description: "Institute Owner",
		review: `I run a small coaching institute. I introduced Vikas Circle’s courses to my students, and they were engaged and motivated. The practical projects make all the difference.`,
	},
	{
		name: "Sameer",
		url: "/male-user-3.png",
		description: "College Student",
		review: `The Business Analysis and Product Management courses helped me understand real-world applications beyond my college syllabus. It’s a great supplement for exam prep.`,
	},
	{
		name: "Mrs. Mehta",
		url: "/female-user-4.png",
		description: "Parent",
		review: `Vikas Circle is helping students like my daughter explore career-oriented skills while preparing for competitive exams. The platform is flexible and practical.`,
	},
	{
		name: "Nikhil",
		url: "/male-user-4.png",
		description: "College Student",
		review: `I was unsure about tech courses because I am from a commerce background, but Vikas Circle’s guidance made it simple. Now I can confidently take up DevOps and Data Analytics.`,
	},
	{
		name: "Mr. Verma",
		url: "/male-user-5.png",
		description: "Institute Owner",
		review: `Our institute started recommending Vikas Circle for students preparing for finance and tech exams. The feedback has been excellent; students are more confident and skilled.`,
	},
	{
		name: "Priya",
		url: "/female-user-5.png",
		description: "College Student",
		review: `The Full Stack and Cloud Computing courses helped me understand concepts quickly and apply them in projects while focusing on my university exams.`,
	},
	{
		name: "Mr. Sharma",
		url: "/male-user-2.png",
		description: "Parent",
		review: `Vikas Circle provides more than learning; it guides students toward career readiness. My son learned practical skills that complement his exam prep perfectly.`,
	},
	{
		name: "Ms. Joshi",
		url: "/female-user-6.png",
		description: "Institute Owner",
		review: `I have recommended Vikas Circle to students preparing for engineering and IT exams. They love the hands-on approach and the way it builds confidence.`,
	},
	{
		name: "Rohan",
		url: "/male-user-4.png",
		description: "College Student",
		review: `The Data Analytics and Business Analysis courses gave me practical experience that textbooks cannot offer. It’s invaluable for exams and real-world applications.`,
	},
	{
		name: "Mr. Bansal",
		url: "/male-user-1.png",
		description: "Institute Owner",
		review: `Vikas Circle allowed my students to explore premium skills for free. It’s an amazing resource that adds real value to their exam preparation.`,
	},
	{
		name: "Tanya",
		url: "/female-user-7.png",
		description: "Exam-Prep Student",
		review: `I joined Vikas Circle while preparing for my competitive exams. The mix of tech and business courses helped me think critically and solve problems effectively.`,
	},
];
