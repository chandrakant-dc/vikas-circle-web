import { getAllSubCategory } from "@src/services/category.service";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const ExploreSearchParam = "filter";

export default function useExplore() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const categoryId = searchParams.get(ExploreSearchParam);

	const [subCategoryList, setSubCategoryList] = useState<SubCategoryListI[]>(
		[],
	);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	function handleUpdateSearchParam(categoryId: string) {
		router.push(
			`${pathname}?${createQueryString(ExploreSearchParam, categoryId)}`,
		);
	}

	useEffect(() => {
		async function handleGetAllSubCategory(categoryId: string) {
			const resp = await getAllSubCategory(categoryId);
			setSubCategoryList(resp?.data?.data || []);
		}

		if (categoryId) handleGetAllSubCategory(categoryId);
	}, [categoryId]);

	return {
		handleUpdateSearchParam,
		categoryId,
		subCategoryList,
	};
}

export interface SubCategoryListI {
	_id: string;
	name: string;
	category: {
		_id: string;
		name: string;
	};
	image: string;
	description: string;
	topicCount: number;
}
