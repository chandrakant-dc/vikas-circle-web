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
		<div>
			<SubCateBanner />
			<YourProgress />
			<LearningMaterial />
		</div>
	);
}
