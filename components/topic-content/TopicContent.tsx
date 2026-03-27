import { Divider } from "@heroui/react";
import StartJourney from "../start-journey/StartJourney";

export default function TopicContent() {
    return (
        <div className="section-container py-8 topic-section-container">
            <div className="topic-content">
                <h4>What is DevOps?</h4>
                <p>DevOps is a way of working where Development (Dev) and Operations (Ops) teams collaborate to build, test, and release software faster and more reliably.</p>

                <b>DevOps = Faster development + Stable deployment + Continuous improvement</b>

                <h4>Why DevOps Came Into Existence</h4>
                <b>Earlier, companies worked like this:</b>
                <p>DevOps is a way of working where Development (Dev) and Operations (Ops) teams collaborate to build, test, and release software faster and more reliably.</p>

                <h4>Why DevOps Came Into Existence</h4>
                <b>Earlier, companies worked like this:</b>
                <p>DevOps is a way of working where Development (Dev) and Operations (Ops) teams collaborate to build, test, and release software faster and more reliably.</p>

                <h4>Why DevOps Came Into Existence</h4>
                <b>Earlier, companies worked like this:</b>
                <p>DevOps is a way of working where Development (Dev) and Operations (Ops) teams collaborate to build, test, and release software faster and more reliably.</p>

            </div>
            <Divider className="my-4 bg-[#4F29ED]" />
            <StartJourney
                title="Test Your Knowledge"
                desc="Take the quiz to see how well you understand concepts"
                ctaText="Start Quiz"
                ctaLink="/"
            />
        </div>
    )
}
