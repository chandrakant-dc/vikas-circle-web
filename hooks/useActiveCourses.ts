import { getActiveCourses } from "@src/services/category.service";
import { useState } from "react";

export default function useActiveCourses() {
    const [activeCourseList, setActiveCourseList] = useState<ActiveCoursesList[]>([]);

    async function handleGetActiveCourses() {
        const resp = await getActiveCourses();
        setActiveCourseList(resp?.data?.data || []);
    }

    return {
        handleGetActiveCourses,
        activeCourseList
    }
}


interface ActiveCoursesList {
    categoryName: string;
    allStudiedSubCategory: AllStudiedSubCategoryI[]
}

interface AllStudiedSubCategoryI {
    _id: string;
    name: string;
    image: string;
    description: string;
    category: {
        _id: string;
        name: string;
    };
    topicCount: number;
    overallPercentage: number;
}