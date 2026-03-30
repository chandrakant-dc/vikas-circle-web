"use client";
import { getAllCategory } from "@src/services/category.service";
import { useEffect, useState } from "react";

export default function useCategory() {
	const [categoryList, setCategoryList] = useState<CategoryI[]>([]);

	useEffect(() => {
		async function handleGetAllCategory() {
			const resp = await getAllCategory();
			setCategoryList(resp?.data?.data || []);
		}
		handleGetAllCategory();
	}, []);

	return {
		categoryList,
	};
}

export interface CategoryI {
	_id: string;
	name: string;
	image: string;
}
