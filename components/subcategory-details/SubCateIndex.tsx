import SubCateProvider from "@src/context/sub-category/SubCateProvider";
import LearningMaterial from "./LearningMaterial";
import SubCateBanner from "./SubCateBanner";
import "./subcategory.css";
import YourProgress from "./YourProgress";

export default function SubCateIndex({
	subcategoryId,
}: {
	subcategoryId: string;
}) {
	console.log("subcategoryId", subcategoryId);

	return (
		<SubCateProvider subcategoryId={subcategoryId}>
			<SubCateBanner />
			<YourProgress />
			<LearningMaterial />
		</SubCateProvider>
	);
}
