import LearningBookIcon from "@src/svg/LearningBookIcon";
import LearningClockIcon from "@src/svg/LearningClockIcon";
import LearningCrownIcon from "@src/svg/LearningCrownIcon";
import RightArrowIcon from "@src/svg/RightArrowIcon";

export default function MyLearnInfoBoxSection() {
    return (
        <div className="section-container py-12!">
            <div className="my-learning-box-container">
                <div className="my-learning-info-box">
                    <LearningClockIcon />
                    <div className="my-learning-info-box-title">Today's Learning</div>
                    <div className="my-learning-info-box-bottom-wrap">
                        <div className="my-learning-info-box-time">45 minutes</div>
                    </div>
                </div>
                <div className="my-learning-info-box">
                    <LearningBookIcon />
                    <div className="my-learning-info-box-title">Total Learning Time</div>
                    <div className="my-learning-info-box-bottom-wrap">
                        <div className="my-learning-info-box-time">120 minutes</div>
                        <div className="my-learning-info-box-view-more">View More</div>
                    </div>
                </div>
                <div className="my-learning-info-box premium">
                    <div className="flex items-start justify-between w-full">
                        <LearningCrownIcon />
                        <div className="my-learning-box-tag">Upgrade Profile</div>
                    </div>
                    <div className="my-learning-info-box-title">Unlock Premium Plan</div>
                    <button type="button" className="cta-default">Upgrade Now <RightArrowIcon /></button>
                </div>
            </div>
        </div>
    )
}
