import { getUserTimeSpent } from "@src/services/auth.service";
import { useEffect, useState } from "react";

export default function useUserTimeSpent() {
    const [userTimeSpent, setUserTimeSpent] = useState<UserTimeSpentI | null>(null);

    useEffect(() => {

        async function handleGetTimeSpent() {
            const resp = await getUserTimeSpent();
            setUserTimeSpent(resp?.data?.data || null);
        }

        handleGetTimeSpent()

    }, []);


    return {
        userTimeSpent
    }
}


interface UserTimeSpentI {
    totalTime: number;
    todayTime: {
        date: string;
        time: number;
    }
}