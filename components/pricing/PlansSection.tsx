"use client";
import { Divider, useDisclosure } from "@heroui/react";
import { AppContext } from "@src/context/global/AppContext";
import usePlan from "@src/hooks/usePlan";
import AdsIcon from "@src/svg/AdsIcon";
import AdsWhiteIcon from "@src/svg/AdsWhiteIcon";
import QuizIcon from "@src/svg/QuizIcon";
import QuizWhiteIcon from "@src/svg/QuizWhiteIcon";
import RightArrowIcon from "@src/svg/RightArrowIcon";
import TimerIcon from "@src/svg/TimerIcon";
import TimerWhiteIcon from "@src/svg/TimerWhiteIcon";
import { useContext, useState } from "react";
import LoginModal from "../onboarding/LoginModal";
import PaymentModal from "../payment-modal/PaymentModal";

export default function PlansSection() {
	const {
		isOpen: isOpenL,
		onOpenChange: onOpenChangeL,
		onOpen: onOpenL,
	} = useDisclosure();
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const { userDetails } = useContext(AppContext);
	const [selectedPlanInfo, setSelectedPlanInfo] = useState<null | SelectedPlanI>(null);
	const { planList } = usePlan();

	const handleBuyPlan = (planName: string, planPrice: number, planId: string) => {
		setSelectedPlanInfo({
			name: planName,
			price: planPrice,
			planId: planId
		})
		if (userDetails?.isLoggedIn) {
			onOpen()
		} else {
			onOpenL()
		}
	}
	return (
		<>
			<div className="plans-section-base">
				<div className="section-container flex flex-col justify-center">
					<div className="section-header-container mb-8">
						<h2>Choose Your Learning Plan</h2>
						<p>
							Flexible pricing options to match your learning goals and budget
						</p>
					</div>
					<div className="pricing-card-container">
						<div className="flex items-center justify-between gap-4">
							{
								planList.map((plan, idx) => (
									<div className={`pricing-card ${idx === 1 ? "active" : ""}`} key={`plan-card-${idx + 1}`}>
										<div>
											<div className="pricing-card-label">{plan?.name}</div>
										</div>
										<div>
											<div className="pricing-card-price">
												₹{plan?.price} <sub>/month</sub>
											</div>
										</div>
										<Divider className="bg-[#9D00FF]" />
										<div className="pricing-card-feat">
											{
												idx === 1 ?
													<AdsWhiteIcon />
													:
													<AdsIcon />
											}
											<div className="pricing-card-feat-label">No Ads</div>
										</div>
										<div className="pricing-card-feat">
											{
												idx === 1 ?
													<TimerWhiteIcon />
													:
													<TimerIcon />
											}
											<div className="pricing-card-feat-label">
												Daily limit - {plan?.dailyLimit} minutes
											</div>
										</div>
										<div className="pricing-card-feat">
											{
												idx === 1 ?
													<QuizWhiteIcon />
													:
													<QuizIcon />
											}
											<div className="pricing-card-feat-label">Quizzes</div>
										</div>
										<button type="button" onClick={() => handleBuyPlan(plan?.name, plan?.price, plan?._id)} className={`${idx === 1 ? "cta-default" : "cta-primary"} max-w-full!`}>
											Buy Now <RightArrowIcon />
										</button>
									</div>
								))
							}
							{/* <div className="pricing-card">
								<div>
									<div className="pricing-card-label">Basic</div>
								</div>
								<div>
									<div className="pricing-card-price">
										₹149 <sub>/month</sub>
									</div>
								</div>
								<Divider className="bg-[#9D00FF]" />
								<div className="pricing-card-feat">
									<AdsIcon />
									<div className="pricing-card-feat-label">No Ads</div>
								</div>
								<div className="pricing-card-feat">
									<TimerIcon />
									<div className="pricing-card-feat-label">
										Daily limit - 30 minutes
									</div>
								</div>
								<div className="pricing-card-feat">
									<QuizIcon />
									<div className="pricing-card-feat-label">Quizzes</div>
								</div>
								<button type="button" onClick={() => handleBuyPlan("Basic", 149)} className="cta-primary max-w-full!">
									Buy Now <RightArrowIcon />
								</button>
							</div>
							<div className="pricing-card active">
								<div>
									<div className="pricing-card-label">Pro</div>
								</div>
								<div>
									<div className="pricing-card-price">
										₹299 <sub>/month</sub>
									</div>
								</div>
								<Divider className="bg-[#0000001A]" />
								<div className="pricing-card-feat">
									<AdsWhiteIcon />
									<div className="pricing-card-feat-label">No Ads</div>
								</div>
								<div className="pricing-card-feat">
									<TimerWhiteIcon />
									<div className="pricing-card-feat-label">
										Daily limit - 120 minutes
									</div>
								</div>
								<div className="pricing-card-feat">
									<QuizWhiteIcon />
									<div className="pricing-card-feat-label">Quizzes</div>
								</div>
								<button type="button" onClick={() => handleBuyPlan("Pro", 299)} className="cta-default max-w-full!">
									Buy Now <RightArrowIcon />
								</button>
							</div>
							<div className="pricing-card">
								<div>
									<div className="pricing-card-label">Premium</div>
								</div>
								<div>
									<div className="pricing-card-price">
										₹499 <sub>/month</sub>
									</div>
								</div>
								<Divider className="bg-[#9D00FF]" />
								<div className="pricing-card-feat">
									<AdsIcon />
									<div className="pricing-card-feat-label">No Ads</div>
								</div>
								<div className="pricing-card-feat">
									<TimerIcon />
									<div className="pricing-card-feat-label">
										Daily limit - 240 minutes
									</div>
								</div>
								<div className="pricing-card-feat">
									<QuizIcon />
									<div className="pricing-card-feat-label">Quizzes</div>
								</div>
								<button type="button" onClick={() => handleBuyPlan("Premium", 499)} className="cta-primary max-w-full!">
									Buy Now <RightArrowIcon />
								</button>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<LoginModal isOpen={isOpenL} onOpenChange={onOpenChangeL} />
			<PaymentModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				onClose={onClose}
				currentPlanInfo={{
					name: selectedPlanInfo?.name || "NA",
					price: selectedPlanInfo?.price || 0,
					planId: selectedPlanInfo?.planId || "NA",
				}}
			/>
		</>
	);
}

interface SelectedPlanI {
	name: string;
	price: number;
	planId: string;
}