"use client";

import MyLearningIndex from "@src/components/my-learning/MyLearningIndex";
import { AppContext } from "@src/context/global/AppContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function MyLearningPage() {
    const { userDetails } = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (!userDetails?.isLoggedIn) {
            router.push("/");
        }
    }, [userDetails, router]);

    if (!userDetails?.isLoggedIn) {
        return null;
    }

    return <MyLearningIndex />;
}