import { subscriptionDetails } from "@src/services/plan.service";
import { useEffect, useState } from "react";

export default function useSubscription() {
    const [userSubscriptionDetails, setUserSubscriptionDetails] = useState<null | SubscriptionDetailsI>(null);

    useEffect(() => {

        async function handlePlanSubscription() {
            const resp = await subscriptionDetails();
            setUserSubscriptionDetails(resp?.data?.data || null);
        }

        handlePlanSubscription();
    }, [])

    return {
        userSubscriptionDetails
    }
}

interface SubscriptionDetailsI {
    subscription: "unsubscribed" | "pending" | "activated";
    subscriptionStartDate?: string;
    subscriptionEndDate?: string;
}
