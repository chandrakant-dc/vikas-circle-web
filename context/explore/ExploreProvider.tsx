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
	const {
		handleUpdateSearchParam,
		categoryId,
		subCategoryList,
		setSearchStr,
		handleSubmitSearch,
	} = useExplore();
	return (
		<ExploreContext.Provider
			value={{
				categoryList,
				handleUpdateSearchParam,
				categoryId,
				subCategoryList,
				setSearchStr,
				handleSubmitSearch,
			}}
		>
			{children}
		</ExploreContext.Provider>
	);
}
