"use client";

import ActiveCourses from "./ActiveCourses";
import MyLearnInfoBoxSection from "./MyLearnInfoBoxSection";
import MyLearningBanner from "./MyLearningBanner";
import "./my-learning.css";
export default function MyLearningIndex() {
    return (
        <div>
            <MyLearningBanner />
            <MyLearnInfoBoxSection />
            <ActiveCourses />
        </div>
    )
}
