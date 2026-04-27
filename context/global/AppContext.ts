"use client";
import type { UserDetailsI } from "@src/hooks/useUserDetails";
import { createContext } from "react";

interface AppContextI {
	userDetails: UserDetailsI | null;
	isLoadingUserDetails: boolean | null;
}

const initVal: AppContextI = {
	userDetails: null,
	isLoadingUserDetails: false,
};

export const AppContext = createContext<AppContextI>(initVal);
