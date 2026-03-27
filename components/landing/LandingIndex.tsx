import StartJourney from "../start-journey/StartJourney";
import BlogSection from "./BlogSection";
import ExploreCoursesSection from "./ExploreCoursesSection";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import "./landing.css";
import Testimonials from "./Testimonials";
export default function LandingIndex() {
	return (
		<div>
			<HeroSection />
			<ExploreCoursesSection />
			<Testimonials />
			<BlogSection />
			<FAQ />
			<StartJourney
				title="Start your learning journey today"
				desc="Join thousands of learners who are mastering new skills and advancing their careers"
				ctaText="Start Now"
				ctaLink="/"
			/>
		</div>
	);
}
