import { Divider } from "@heroui/react";
import useSubscription from "@src/hooks/useSubscription";
import useUserTimeSpent from "@src/hooks/useUserTimeSpent";
import LearningBookIcon from "@src/svg/LearningBookIcon";
import LearningClockIcon from "@src/svg/LearningClockIcon";
import LearningCrownIcon from "@src/svg/LearningCrownIcon";
import PlanPendingIcon from "@src/svg/PlanPendingIcon";
import RightArrowIcon from "@src/svg/RightArrowIcon";
import Link from "next/link";

function secondsToMinutes(seconds: number): number {
	return Math.round(seconds / 60);
}

export default function MyLearnInfoBoxSection() {
	// const { userDetails } = useContext(AppContext);
	const { userSubscriptionDetails } = useSubscription();
	const { userTimeSpent } = useUserTimeSpent();
	return (
		<div className="section-container py-12!">
			<div className="my-learning-box-container">
				<div className="my-learning-info-box">
					<LearningClockIcon />
					<div className="my-learning-info-box-title">Today's Learning</div>
					<div className="my-learning-info-box-bottom-wrap">
						<div className="my-learning-info-box-time">
							{secondsToMinutes(userTimeSpent?.todayTime?.time || 0)} minutes
						</div>
					</div>
				</div>
				<div className="my-learning-info-box">
					<LearningBookIcon />
					<div className="my-learning-info-box-title">Total Learning Time</div>
					<div className="my-learning-info-box-bottom-wrap">
						<div className="my-learning-info-box-time">
							{secondsToMinutes(userTimeSpent?.totalTime || 0)} minutes
						</div>
						<div className="my-learning-info-box-view-more">View More</div>
					</div>
				</div>
				<div className="my-learning-info-box premium">
					<PlanCard
						type={
							userSubscriptionDetails?.subscription === "pending"
								? "pending"
								: userSubscriptionDetails?.subscription === "activated"
									? "activated"
									: "buy"
						}
						startDate={userSubscriptionDetails?.subscriptionStartDate || "NA"}
						endDate={userSubscriptionDetails?.subscriptionEndDate || "NA"}
					/>
				</div>
			</div>
		</div>
	);
}

function PlanCard({
	type,
	startDate,
	endDate,
}: {
	type: "buy" | "pending" | "activated";
	startDate: string;
	endDate: string;
}) {
	switch (type) {
		case "buy":
			return (
				<>
					<div className="flex items-start justify-between w-full">
						<LearningCrownIcon />
						<div className="my-learning-box-tag">Upgrade Profile</div>
					</div>
					<div className="my-learning-info-box-title">Unlock Premium Plan</div>
					<Link href={"/pricing"} type="button" className="cta-default">
						Upgrade Now <RightArrowIcon />
					</Link>
				</>
			);
		case "pending":
			return (
				<>
					<div className="flex items-start justify-between w-full">
						<LearningCrownIcon />
						<div className="my-learning-box-tag">Premium Upgrade</div>
					</div>
					<div>
						<div className="my-learning-info-box-title ">
							Activation in progress
						</div>
						<div className="my-learning-info-box-para">
							Your plan might take 24 hours to activate.
						</div>
					</div>
					<Divider className="my-2 bg-white" />
					<div className="my-learning-info-box-status">
						<PlanPendingIcon />
						Verification Pending
					</div>
				</>
			);
		case "activated":
			return (
				<>
					<div className="flex items-start justify-between w-full">
						<LearningCrownIcon />
						<div className="my-learning-box-tag">Premium Upgrade</div>
					</div>
					<div>
						<div className="my-learning-info-box-title ">
							Premium Plan activated!
						</div>
						<div className="my-learning-info-box-para">
							You have full access of premium plan benefits.
						</div>
					</div>
					{/* <Divider className="my-2 bg-white" /> */}
					<div className="my-learning-info-box-date-wrap">
						<div className="my-learning-info-box-date">
							Start Date: {startDate}
						</div>
						<div className="my-learning-info-box-date-divider"></div>
						<div className="my-learning-info-box-date">End Date: {endDate}</div>
					</div>
				</>
			);
	}
}
