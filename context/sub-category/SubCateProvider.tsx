"use client";
import useTopic from "@src/hooks/useTopic";
import { SubCateContext } from "./SubCateContext";

export default function SubCateProvider({
	children,
	subcategoryId,
}: {
	children: React.ReactNode;
	subcategoryId: string;
}) {
	const { topicList, subCateDetails } = useTopic(subcategoryId);
	return (
		<SubCateContext.Provider
			value={{
				topicList,
				subCateDetails,
			}}
		>
			{children}
		</SubCateContext.Provider>
	);
}
