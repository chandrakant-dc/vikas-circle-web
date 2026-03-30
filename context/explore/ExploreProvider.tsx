"use client";
import useCategory from "@src/hooks/useCategory";
import useExplore from "@src/hooks/useExplore";
import { ExploreContext } from "./ExploreContext";

export default function ExploreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { categoryList } = useCategory();
	const { handleUpdateSearchParam, categoryId, subCategoryList } = useExplore();
	return (
		<ExploreContext.Provider
			value={{
				categoryList,
				handleUpdateSearchParam,
				categoryId,
				subCategoryList,
			}}
		>
			{children}
		</ExploreContext.Provider>
	);
}
