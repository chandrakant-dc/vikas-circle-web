import FacebookIcon from "@src/svg/FacebookIcon";
import LinkedinIcon from "@src/svg/LinkedinIcon";
import LocationIcon from "@src/svg/LocationIcon";
import MailContactIcon from "@src/svg/MailContactIcon";
import PhoneContactIcon from "@src/svg/PhoneContactIcon";
import TwitterIcon from "@src/svg/TwitterIcon";
import YoutubeIcon from "@src/svg/YoutubeIcon";
import ContactUsForm from "./ContactUsForm";

export default function ContactMainSection() {
	return (
		<div className="contact-us-main-section">
			<div className="section-container flex items-center">
				<div className="flex lg:flex-row flex-col-reverse justify-between w-full gap-8">
					<div className="flex flex-col gap-8 lg:max-w-125 flex-1">
						<h2 className="contact-section-heading">Send Us a Message</h2>

						<div className="flex flex-col gap-6">
							<div className="contact-info-card">
								<MailContactIcon />
								<div className="contact-info-content">
									<div className="contact-info-label">Email Us</div>
									<div className="contact-info-value">
										support@vikascircle.com
									</div>
								</div>
							</div>
							<div className="contact-info-card">
								<PhoneContactIcon />
								<div className="contact-info-content">
									<div className="contact-info-label">Call Us</div>
									<div className="contact-info-value">+91 1234567890</div>
								</div>
							</div>
							<div className="contact-info-card">
								<LocationIcon />
								<div className="contact-info-content">
									<div className="contact-info-label">Visit Us</div>
									<div className="contact-info-value">
										123 Learning Street, Mumbai, India 400001
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="contact-info-label">Stay Connected</div>
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
					</div>
					<ContactUsForm />
				</div>
			</div>
		</div>
	);
}
