import { getAllSubCategory } from "@src/services/category.service";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const ExploreSearchParam = "filter";

export default function useExplore() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const categoryId = searchParams.get(ExploreSearchParam) || "all";
	const [searchStr, setSearchStr] = useState<string>("");
	// const [debouncedSearch, setDebouncedSearch] = useState<string>("");

	const [subCategoryList, setSubCategoryList] = useState<SubCategoryListI[]>(
		[],
	);

	const handleSubmitSearch = async () => {
		const resp = await getAllSubCategory(categoryId, searchStr);
		setSubCategoryList(resp?.data?.data || []);
	};

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setDebouncedSearch(searchStr);
	// 	}, 500);

	// 	return () => clearTimeout(timer);
	// }, [searchStr]);

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
		async function handleGetAllSubCategory(
			categoryId?: string | null,
			search?: string,
		) {
			const resp = await getAllSubCategory(categoryId, search);
			setSubCategoryList(resp?.data?.data || []);
		}

		handleGetAllSubCategory(categoryId);
	}, [categoryId]);

	return {
		handleUpdateSearchParam,
		categoryId,
		subCategoryList,
		setSearchStr,
		handleSubmitSearch,
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
	overallPercentage: number;
}
