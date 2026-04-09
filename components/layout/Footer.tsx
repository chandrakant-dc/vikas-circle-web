import FacebookIcon from "@src/svg/FacebookIcon";
import LinkedinIcon from "@src/svg/LinkedinIcon";
import TwitterIcon from "@src/svg/TwitterIcon";
import YoutubeIcon from "@src/svg/YoutubeIcon";
import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
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
							<div className="footer-social">
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
							</div>
						</div>
						<div className="footer-list-wrap">
							<h4 className="footer-title">Quick Links</h4>
							<ul>
								<li>
									<Link href={"/"}>Home</Link>
								</li>
								<li>
									<Link href={"/explore"}>Explore</Link>
								</li>
								<li>
									<Link href={"/pricing"}>Pricing</Link>
								</li>
								<li>
									<Link href={"/contact-us"}>Contact us</Link>
								</li>
							</ul>
						</div>
						<div className="footer-list-wrap">
							<h4 className="footer-title">Legal</h4>
							<ul>
								<li>
									<Link href={"/"}>Privacy Policy</Link>
								</li>
								<li>
									<Link href={"/"}>Terms & Conditions</Link>
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
