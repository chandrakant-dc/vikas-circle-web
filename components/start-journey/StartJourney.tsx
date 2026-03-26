import RightArrowIcon from "@src/svg/RightArrowIcon";
import Link from "next/link";
import "./start-journey.css";

export default function StartJourney() {
    return (
        <div className="start-journey-base">
            <h2>Start your learning journey today</h2>
            <p>Join thousands of learners who are mastering new skills and advancing their careers</p>
            <Link href={"/"} className="cta-default">Start Now <RightArrowIcon /></Link>
        </div>
    )
}
