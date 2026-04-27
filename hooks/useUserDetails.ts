import { getLoggedInUser } from "@src/services/auth.service";
import { useEffect, useState } from "react";

export default function useUserDetails() {
	const [userDetails, setUserDetails] = useState<UserDetailsI | null>(null);
	const [isLoadingUserDetails, setIsLoading] = useState<boolean | null>(null);

	useEffect(() => {
		async function handleGetUserDetails() {
			setIsLoading(true);
			try {
				const resp = await getLoggedInUser();
				const details = resp?.data?.data;
				setUserDetails(details ? { ...details, isLoggedIn: true } : null);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				throw error;
			}
		}
		handleGetUserDetails();
	}, []);

	return {
		userDetails,
		isLoadingUserDetails,
	};
}

export interface UserDetailsI {
	fullName: string;
	email: string;
	isLoggedIn: boolean;
	// subscription?: "unsubscribed" | "pending" | "activated";
}
