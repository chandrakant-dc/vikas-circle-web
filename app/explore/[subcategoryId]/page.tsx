import SubCateIndex from "@src/components/subcategory-details/SubCateIndex";

export default async function SubCategoryDetailsPage({
	params,
}: {
	params: Promise<{ subcategoryId: string }>;
}) {
	const { subcategoryId } = await params;

	return <SubCateIndex subcategoryId={subcategoryId} />;
}
