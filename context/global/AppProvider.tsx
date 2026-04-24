"use client";
import useUserDetails from "@src/hooks/useUserDetails";
import { AppContext } from "./AppContext";

export default function AppProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { userDetails, isLoadingUserDetails } = useUserDetails();
	return (
		<AppContext.Provider
			value={{
				userDetails,
				isLoadingUserDetails
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
