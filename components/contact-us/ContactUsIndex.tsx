import StartJourney from "../start-journey/StartJourney";
import "./contact.css";
import ContactBanner from "./ContactBanner";
import ContactMainSection from "./ContactMainSection";
export default function ContactUsIndex() {
    return (
        <div>
            <ContactBanner />
            <ContactMainSection />
            <StartJourney
                title="Ready to Start Learning?"
                desc="Join thousands of learners on vikascircle.com and transform your career"
                ctaText="Browse Courses"
                ctaLink="/"
            />
        </div>
    )
}
