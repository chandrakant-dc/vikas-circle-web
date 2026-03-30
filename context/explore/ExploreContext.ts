"use client";
import type { CategoryI } from "@src/hooks/useCategory";
import type { SubCategoryListI } from "@src/hooks/useExplore";
import { createContext } from "react";

interface ExploreContextI {
	categoryList: CategoryI[];
	handleUpdateSearchParam: (categoryId: string) => void;
	categoryId: string | null;
	subCategoryList: SubCategoryListI[];
}

const initVal: ExploreContextI = {
	categoryList: [],
	handleUpdateSearchParam: () => "",
	categoryId: "",
	subCategoryList: [],
};

export const ExploreContext = createContext<ExploreContextI>(initVal);
