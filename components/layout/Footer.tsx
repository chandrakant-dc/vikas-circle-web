"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./footer.css";

export default function Footer() {
	const pathname = usePathname();
	return (
		<div>
			<footer>
				<div className="section-container flex items-center">
					<div className="flex items-start justify-between w-full footer-content-wrap">
						<div className="footer-info">
							<Image
								src={"/logo.png"}
								alt="blog-card-img"
								height={200}
								width={200}
							/>
							<p>
								We understand the unique demands of the financial brokerage
								world. We connect exceptional talent with leading firms.
							</p>
							{/* <div className="footer-social">
								<a href="/" target="_blank" rel="noopener">
									<FacebookIcon />
								</a>
								<a href="/" target="_blank" rel="noopener">
									<TwitterIcon />
								</a>
								<a href="/" target="_blank" rel="noopener">
									<YoutubeIcon />
								</a>
								<a href="/" target="_blank" rel="noopener">
									<LinkedinIcon />
								</a>
							</div> */}
						</div>
						<div className="footer-list-wrap">
							<h4 className="footer-title">Quick Links</h4>
							<ul>
								<li>
									<Link
										href={"/"}
										className={`${pathname === "/" ? "underline underline-offset-4" : ""}`}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href={"/explore"}
										className={`${pathname.includes("/explore") ? "underline underline-offset-4" : ""}`}
									>
										Explore
									</Link>
								</li>
								{/* <li>
									<Link href={"/pricing"}>Pricing</Link>
								</li> */}
								<li>
									<Link
										href={"/contact-us"}
										className={`${pathname === "/contact-us" ? "underline underline-offset-4" : ""}`}
									>
										Contact us
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer-list-wrap">
							<h4 className="footer-title">Legal</h4>
							<ul>
								<li>
									<Link target="_blank" href={"/privacy-policy"}>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link target="_blank" href={"/terms-conditions"}>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<div className="footer-bottom">© Vikas Circle | All Rights Reserved </div>
		</div>
	);
}
