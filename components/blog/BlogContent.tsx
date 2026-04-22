"use client";
import { blogs } from "@src/data/blogs";
import parse from "html-react-parser";
import "../topic-content/topic-content.css";
export default function BlogContent({ slug }: { slug: string }) {
	const blog = blogs.find((b) => b.slug === slug);

	if (!blog) return <div>Not found</div>;
	return (
		<div>
			<div className="topic-page-banner">
				<div className="section-container flex items-center ">
					<div className="topic-page-banner-content">
						{/* <h2>{topicDetails?.topicName}</h2> */}
						<h2>{blog.title}</h2>
						<p>
							Master the principles, practices, and tools that drive modern
							software development and operations
						</p>
					</div>
				</div>
			</div>
			<div className="section-container py-8 topic-section-container">
				<div className="blog-content">{parse(blog.content)}</div>
			</div>
		</div>
	);
}
