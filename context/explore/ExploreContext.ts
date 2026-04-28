"use client";
import type { CategoryI } from "@src/hooks/useCategory";
import type { SubCategoryListI } from "@src/hooks/useExplore";
import { createContext, type Dispatch, type SetStateAction } from "react";

interface ExploreContextI {
	categoryList: CategoryI[];
	handleUpdateSearchParam: (categoryId: string) => void;
	categoryId: string | null;
	subCategoryList: SubCategoryListI[];
	setSearchStr: Dispatch<SetStateAction<string>>;
	handleSubmitSearch: () => void;
}

const initVal: ExploreContextI = {
	categoryList: [],
	handleUpdateSearchParam: () => "",
	categoryId: "",
	subCategoryList: [],
	setSearchStr: () => {},
	handleSubmitSearch: () => {},
};

export const ExploreContext = createContext<ExploreContextI>(initVal);
