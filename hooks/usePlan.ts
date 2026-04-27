import { getAllPlans } from "@src/services/plan.service";
import { useEffect, useState } from "react";

export default function usePlan() {
	const [planList, setPlanList] = useState<PlanListI[]>([]);

	useEffect(() => {
		async function handleGetAllPlans() {
			const resp = await getAllPlans();
			setPlanList(resp?.data?.data || []);
		}

		handleGetAllPlans();
	}, []);

	return {
		planList,
	};
}

interface PlanListI {
	_id: string;
	name: string;
	price: number;
	durationInDays: number;
	dailyLimit: number;
}
