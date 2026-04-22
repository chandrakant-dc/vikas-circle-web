"use client";
import useUserDetails from "@src/hooks/useUserDetails";
import { AppContext } from "./AppContext";

export default function AppProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { userDetails } = useUserDetails();
	return (
		<AppContext.Provider
			value={{
				userDetails,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
