"use client";
import type { UserDetailsI } from "@src/hooks/useUserDetails";
import { createContext } from "react";

interface AppContextI {
	userDetails: UserDetailsI | null;
}

const initVal: AppContextI = {
	userDetails: null,
};

export const AppContext = createContext<AppContextI>(initVal);
