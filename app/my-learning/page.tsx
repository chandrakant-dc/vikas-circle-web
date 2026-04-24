"use client";

import MyLearningIndex from "@src/components/my-learning/MyLearningIndex";
import { AppContext } from "@src/context/global/AppContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function MyLearningPage() {
    const { userDetails, isLoadingUserDetails } = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoadingUserDetails === false) {
            if (userDetails === null) {
                router.push("/");
            }
        }
    }, [isLoadingUserDetails, userDetails, router]);

    if (isLoadingUserDetails) {
        return <div>Loading...</div>;
    }

    if (!userDetails?.isLoggedIn) {
        return null;
    }

    return <MyLearningIndex />;
}