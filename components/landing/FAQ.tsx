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
		answer: `Vikas Circle provides structured learning with curated courses across multiple domains. Unlike random videos, the platform guides you step-by-step so you can actually apply your skills while keeping up with your studies.`,
	},
	{
		question:
			"Do I get a certificate or official recognition after completing a course?",
		answer: `Vikas Circle provides structured learning with curated courses across multiple domains. Unlike random videos, the platform guides you step-by-step so you can actually apply your skills while keeping up with your studies.`,
	},
	{
		question:
			"Can I balance Vikas Circle courses with my college or school studies?",
		answer: `Vikas Circle provides structured learning with curated courses across multiple domains. Unlike random videos, the platform guides you step-by-step so you can actually apply your skills while keeping up with your studies.`,
	},
	{
		question: "How is Vikas Circle different from other learning platforms?",
		answer: `Vikas Circle provides structured learning with curated courses across multiple domains. Unlike random videos, the platform guides you step-by-step so you can actually apply your skills while keeping up with your studies.`,
	},
];
