import ClockWhiteIcon from "@src/svg/ClockWhiteIcon";
import WhiteBookIcon from "@src/svg/WhiteBookIcon";

export default function SubCateBanner() {
	return (
		<div className="subcategory-page-banner">
			<div className="section-container flex items-center ">
				<div className="subcategory-page-banner-content">
					<div className="subcategory-tag">Tech & IT</div>
					<h2>DevOps</h2>
					<p>
						Master the complete DevOps lifecycle from CI/CD pipelines to
						container orchestration. Learn industry best practices and tools
						used by leading tech companies.
					</p>
					<div className="subcategory-info">
						<div className="subcategory-info-wrap">
							<WhiteBookIcon />
							<span>50 Topics</span>
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
