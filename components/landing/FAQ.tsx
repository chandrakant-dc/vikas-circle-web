"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import DownChevronIcon from "@src/svg/DownChevronIcon";

export default function FAQ() {
	return (
		<div className="faq-section-base">
			<div className="section-container flex flex-col justify-center">
				<div className="section-header-container mb-8">
					<h2>Frequently Asked Questions</h2>
					<p>
						Find answers to common questions about our courses and learning
						platform
					</p>
				</div>
				<div>
					<Accordion
						itemClasses={{
							base: "faq-item-base",
							trigger: "faq-trigger",
							content: "faq-content",
						}}
						showDivider={false}
					>
						{faqs.map((item, i) => (
							<AccordionItem
								key={i.toString()}
								aria-label={`Accordion ${i + 1}`}
								title={item?.question}
								indicator={<DownChevronIcon />}
							>
								{item?.answer}
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
}

const faqs = [
	{
		question:
			"Why should I learn on Vikas Circle instead of just YouTube or Google?",
		answer: `Vikas Circle provides structured learning with curated courses across multiple domains. Unlike random videos, the platform guides you step-by-step so you can actually apply your skills while keeping up with your studies.`,
	},
	{
		question: "Are the courses really free?",
		answer: `Yes, all courses are free to access. For an ad-free experience, you can opt for our subscription model which supports the platform and gives you uninterrupted learning`,
	},
	{
		question:
			"Do I get a certificate or official recognition after completing a course?",
		answer: `Currently, certificates are not provided. The focus is on practical knowledge and skills that will help you in internships, projects, and real-world job opportunities.`,
	},
	{
		question:
			"Can I balance Vikas Circle courses with my college or school studies?",
		answer: `Absolutely. The courses are designed to be flexible and bite-sized, allowing you to learn without affecting your regular study schedule.`,
	},
	{
		question: "How is Vikas Circle different from other learning platforms?",
		answer: `Vikas Circle goes beyond just providing content. The platform emphasizes career growth, practical application, and job readiness. Active learners will also get access to job openings and internship opportunities.`,
	},
	{
		question: "Can I explore multiple fields on Vikas Circle?",
		answer: `Yes, you can learn across multiple categories such as Tech and IT, Design, Marketing, Finance, and Personal Development. Cross-skilling makes you more versatile and industry-ready.`,
	},
	{
		question: "Will I be able to learn on mobile or offline?",
		answer: `Vikas Circle is fully mobile-friendly so you can learn anytime and anywhere. Currently courses are online only, but the platform is optimized for smooth learning even on slower internet connections.`,
	},
	{
		question: "How does Vikas Circle support my career growth?",
		answer: `Besides learning, active students get access to guidance, tips, and curated job openings. Our platform focuses on making you job-ready without any cost barrier.`,
	},
	{
		question: "How can I enjoy an ad-free learning experience?",
		answer: `While all courses are free, you can choose our optional subscription to remove ads. This supports the platform and allows uninterrupted learning for those who prefer a cleaner experience.`,
	},
];
